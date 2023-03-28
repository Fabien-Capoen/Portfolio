function init_sitew3d (){
  $("#poupe").delay(00).fadeIn(3500);  // apparition de la vidéo en fondu

  let nbr=5;                       // nombre d'images dans le carroussel
  let p=0;                         // Postion par défaut du carroussel
  let informatiqueContainer=document.getElementById("informatique-container"); // récupération des différents objets en js
  let g=document.getElementById("g");
  let d=document.getElementById("d");

  for(i=1;i<=nbr;i++){                                     // Pour i=1 tant que i différent de nbr (5) i++
      div=document.createElement("div");                   // Création d'une div
      div.className="informatiquePhoto";                   // avec cette classe
      div.style.backgroundImage="url('site_w3d/pictures/img"+i+".jpg')";  // URL du background image 
      informatiqueContainer.appendChild(div);              // div enfant de informatique-container
    }

  if (window.matchMedia("(max-width: 1000px)").matches) {  // comportement jusqu'a largeur écran 1000 px compris
    informatiqueContainer.style.width=(80*nbr)+"vw";     // ID informatique-container 80*5 vw
    d.onclick=function(){                                // au click sur bouton droit
      if(p>-nbr)                                     // si p > -4
          p--;
          informatiqueContainer.style.transform="translate("+p*57.6+"vw)"; // appliquer le décalage en fonction de p
          informatiqueContainer.style.transition="all 0.5s ease";
      if(p==-nbr)
          p=0;
          informatiqueContainer.style.transform="translate("+p*57.6+"vw)";
          informatiqueContainer.style.transition="all 0.5s ease";
    }
    g.onclick=function(){
      if(p==0)
        p=-5;
        informatiqueContainer.style.transform="translate("-4*57.6+"vw)";
        informatiqueContainer.style.transition="all 0.5s ease";
      if(p<0)                                          // si p < 0
        p++;
        informatiqueContainer.style.transform="translate("+p*57.6+"vw)";
        informatiqueContainer.style.transition="all 0.5s ease";
    }
  }

  else{
    // comportement jusqu'a largeur écran 1000 px compris
    informatiqueContainer.style.width=(36.8*nbr)+"vw";     // ID informatique-container 80*5 vw
    d.onclick=function(){                                // au click sur bouton droit
      if(p>-nbr)                                     // si p > -4
          p--;
          informatiqueContainer.style.transform="translate("+p*36.8+"vw)"; // appliquer le décalage en fonction de p
          informatiqueContainer.style.transition="all 0.5s ease";
      if(p==-nbr)
          p=0;
          informatiqueContainer.style.transform="translate("+p*36.8+"vw)";
          informatiqueContainer.style.transition="all 0.5s ease";
      }
      g.onclick=function(){
        if(p==0)
          p=-5;
          informatiqueContainer.style.transform="translate("-4*36.8+"vw)";
          informatiqueContainer.style.transition="all 0.5s ease";
        if(p<0)                                          // si p < 0
          p++;
          informatiqueContainer.style.transform="translate("+p*36.8+"vw)";
          informatiqueContainer.style.transition="all 0.5s ease";
      }
  }
}