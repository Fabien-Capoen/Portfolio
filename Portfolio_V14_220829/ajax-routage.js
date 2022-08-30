function routage(url, target, callback) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          target.innerHTML = this.responseText;
          if (callback)
            callback();
        }
        if (this.status == 404) { target.innerHTML = "Page not found."; }
      }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}
document.getElementById("competences").addEventListener('click', function(){
  routage("competences/competences.html", document.getElementById("cadre-left"))
});
document.getElementById("accueil").addEventListener('click', function(){
  routage("accueil.html", document.getElementById("cadre-left"))
});
document.getElementById("nbre-myst").addEventListener('click', function(){
    routage("nombre-mystere/nbre-myst.html", document.getElementById("cadre-left"), init_nbre_myst)
});
document.getElementById("srcDamier").addEventListener('click', function(){
  routage("Grid/grid.html", document.getElementById("cadre-left"), dynamic_color)
});
document.getElementById("srcBalle").addEventListener('click', function(){
  routage("balle/balle.html", document.getElementById("cadre-left"), testBalle)
});
document.getElementById("site_w3d").addEventListener('click', function(){
  routage("site_w3d/site_w3d.php", document.getElementById("cadre-left"), init_sitew3d)
});

