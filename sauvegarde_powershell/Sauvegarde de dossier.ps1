# Décaration des Variables
    # demande une saisie pour le chemin de destination de la copie du contenu
    $saisie = read-host "Entrez le chemin du dossier a copier" -ErrorAction SilentlyContinue
    # demande une saisie pour le chemin de destination de la sauvegarde du contenu
    $destination = read-host "Entrez le chemin de destination pour la copie" -ErrorAction SilentlyContinue
    # récupération de la date au format AnnéeMoisJour_Heure(h)Minutes(m)secondes(s) 
    $date = Get-Date -Format yyyyMMdd_HH\hmm\mss\s 
    # chemin de destination de la sauvegarde de l'archive ZIP + ajout date au Zip
    $destination_archive = $destination + "\Archive\archive" + "_" + $date 

# Si le dossier à copier existe
if(Test-Path -Path $saisie) {
    # Si le dossier de destination existe
    if(Test-Path -Path $destination){
        # Si le dossier Archive existe
        if (Test-Path -Path ($destination + "\Archive")) {  
            New-Item  ($destination + "\Archive\errorsTemp.txt") -itemType File # créer le fichier de rapport d'erreur
        }
        # si le dossier Archive n'existe pas
        else { 
            # Création des Fichiers / Dossier nécessaire pour Archives et Erreurs
            # créer le dossier Archive
            New-Item ($destination + "\Archive") -itemType Directory
            # créer le fichier de rapport d'erreur 
            New-Item  ($destination + "\Archive\errors.txt") -itemType File
            # créer le fichier de rapport d'erreur temporaire 
            New-Item  ($destination + "\Archive\errorsTemp.txt") -itemType File
        }
        # Copie des éléments + Archive Zip
        # copie de tous les éléments dans le dossier de destination
        Copy-Item -Path $saisie\* -Recurse -Force -Destination $destination -ErrorAction SilentlyContinue -Confirm
        # création d'un fichier Zip avec tous les éléments copiés
        Compress-Archive -Path $saisie -Force -DestinationPath $destination_archive -ErrorAction SilentlyContinue
        #afficher un message
        Write-Host "Les elements ont ete copies et une archive est ajoutee dans le dossier Archive" 
    }
    # si le dossier de destination n'existe pas
    else {
        # afficher un message si destination non valide
        Write-Host " Le chemin du dossier de destination n'est pas valide"
    }
}
# si le dossier source pour la copie n'existe pas
else{
    # afficher un message si dossier de copie source non valide
    Write-Host " Le chemin du dossier a copier n'est pas valide"
}

# Gestion des erreurs 
    # copie les erreurs dans le fichier errorsTemp.txt
        add-content -Path ($destination + "\Archive\errorsTemp.txt") -value $error  -ErrorAction SilentlyContinue
    # remplace le contenu de errors.txt par le contenu de errorsTemp.txt
        copy-Item -Path ($destination + "\Archive\errorsTemp.txt") -Force -Destination "D:\Powershell\Sauvegarde\Archive\errors.txt" -ErrorAction SilentlyContinue
    # supprime le fichier errorsTemp.txt 
        Remove-Item ($destination + "\Archive\errorsTemp.txt") -ErrorAction SilentlyContinue
