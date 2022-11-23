gbj = window.prompt("Wat is je geboortejaar?: ")
tr = 0
trl = 3



if(parseInt(gbj) <= 2006) {
  alert("Zeer goed! Je kan nu beginnen oefenen!!")
}
else{
  alert("Sorry, maar je bent nog niet oud genoeg om deze pagina te mogen gebruiken...")
  alert("Startpagina aan het laden...")
  window.location.assign("../index.html");
}
