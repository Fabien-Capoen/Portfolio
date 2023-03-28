function routage(url, target, callback) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          target.innerHTML = this.responseText;
          if (callback){}
            callback();
        }
        if (this.status == 404) { target.innerHTML = "Page not found."; }
      }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

document.getElementById("contexte_pro").addEventListener('click', function(){
  routage("contextePro/contextePro.html", document.getElementById("cadre-left"))
});
document.getElementById("competences").addEventListener('click', function(){
  routage("competences/competences.html", document.getElementById("cadre-left"))
});

document.getElementById("accueil").addEventListener('click', function(){
  routage("accueil.html", document.getElementById("cadre-left"))
});

document.getElementById("glpiInstall").addEventListener('click', function(){
  routage("glpi/installation_glpi.html", document.getElementById("cadre-left"))
});
document.getElementById("glpiUse").addEventListener('click', function(){
  routage("glpi/traitement_de_ticket.html", document.getElementById("cadre-left"))
});

document.getElementById("sauvegarde_powershell").addEventListener('click', function(){
  routage("sauvegarde_powershell/sauvegarde_powershell.html", document.getElementById("cadre-left"))
});

document.getElementById("refonteBase").addEventListener('click', function(){
  routage("refonte_site/enoncee/routage_enoncee.html", document.getElementById("cadre-left"))
});
document.getElementById("refonte").addEventListener('click', function(){
  routage("refonte_site/refonte/routage_refonte_site.html", document.getElementById("cadre-left"))
});

document.getElementById("siteUfaContexte").addEventListener('click', function(){
  routage("site_ufa/contexte/site_ufa_contexte.html", document.getElementById("cadre-left"))
});
document.getElementById("siteUfa").addEventListener('click', function(){
  routage("site_ufa/site_ufa/site_ufa.html", document.getElementById("cadre-left"))
});

document.getElementById("nbre-myst").addEventListener('click', function(){
    routage("nombre-mystere/nbre-myst.html", document.getElementById("cadre-left"), init_nbre_myst)  // appelle la fonction js du fichier
});
document.getElementById("srcDamier").addEventListener('click', function(){
  routage("Grid/grid.html", document.getElementById("cadre-left"), dynamic_color)
});
document.getElementById("srcBalle").addEventListener('click', function(){
  routage("balle/balle.html", document.getElementById("cadre-left"), testBalle)
});
document.getElementById("ticket_io").addEventListener('click', function(){
  routage("ticket_io/ticket_io.html", document.getElementById("cadre-left"))
});


document.getElementById("site_w3d").addEventListener('click', function(){
  routage("site_w3d/site_w3d.php", document.getElementById("cadre-left"), init_sitew3d)
});

document.getElementById("veille_num").addEventListener('click', function(){
  routage("veille_numerique/veille.html", document.getElementById("cadre-left"))
});

document.getElementById("tableau_synthese").addEventListener('click', function(){
  routage("tableau_synthese/tableau_synthese.html", document.getElementById("cadre-left"))
});

document.getElementById("fiche1").addEventListener('click', function(){
  routage("fiche_activite/fiche1/fiche_activite1.html", document.getElementById("cadre-left"))
});
document.getElementById("fiche2").addEventListener('click', function(){
  routage("fiche_activite/fiche2/fiche_activite2.html", document.getElementById("cadre-left"))
});
document.getElementById("fiche3").addEventListener('click', function(){
  routage("fiche_activite/fiche3/fiche_activite3.html", document.getElementById("cadre-left"))
});
document.getElementById("fiche4").addEventListener('click', function(){
  routage("fiche_activite/fiche4/fiche_activite4.html", document.getElementById("cadre-left"))
});

document.getElementById("CV").addEventListener('click', function(){
  routage("CV/CV.html", document.getElementById("cadre-left"))
});