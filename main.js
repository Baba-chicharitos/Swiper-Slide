let contentPoint = document.getElementById("numImg");
let gauche = document.getElementById("gauche");
let droite = document.getElementById("droite");
let p1 = document.getElementById("photo1");
let p2 = document.getElementById("photo2");
let p3 = document.getElementById("photo3");
let p4 = document.getElementById("photo4");
let p5 = document.getElementById("photo5");
let po1 = document.getElementById("point1");
let po2 = document.getElementById("point2");
let po3 = document.getElementById("point3");
let po4 = document.getElementById("point4");
let po5 = document.getElementById("point5");
let y = 3;


function reset() {
  p1.classList.remove("droite1","droite2","droite3","droite4","centre","gauche1","gauche2","gauche3","gauche4");
  p2.classList.remove("droite1","droite2","droite3","droite4","centre","gauche1","gauche2","gauche3","gauche4");
  p3.classList.remove("droite1","droite2","droite3","droite4","centre","gauche1","gauche2","gauche3","gauche4");
  p4.classList.remove("droite1","droite2","droite3","droite4","centre","gauche1","gauche2","gauche3","gauche4");
  p5.classList.remove("droite1","droite2","droite3","droite4","centre","gauche1","gauche2","gauche3","gauche4");
}

document.addEventListener("DOMContentLoaded", () => {
  reset();
  p1.classList.add("droite2");
  p2.classList.add("droite1");
  p3.classList.add("centre");
  p4.classList.add("gauche1");
  p5.classList.add("gauche2");

});

document.addEventListener("click")

// valeur du content qui log le placement
function pointCount () {
  reset();

  if (y === 1) {
    p1.classList.add("centre");
    p2.classList.add("gauche1");
    p3.classList.add("gauche2");
    p4.classList.add("gauche3");
    p5.classList.add("gauche4");
  } else if (y === 2) {
    p1.classList.add("droite1");
    p2.classList.add("centre");
    p3.classList.add("gauche1");
    p4.classList.add("gauche2");
    p5.classList.add("gauche3");
  } else if ( y === 3 ) {
    p1.classList.add("droite2");
    p2.classList.add("droite1");
    p3.classList.add("centre");
    p4.classList.add("gauche1");
    p5.classList.add("gauche2");
  } else if ( y === 4 ) {
    p1.classList.add("droite3");
    p2.classList.add("droite2");
    p3.classList.add("droite1");
    p4.classList.add("centre");
    p5.classList.add("gauche1");
  } else if ( y === 5 ) {
    p1.classList.add("droite4");
    p2.classList.add("droite3");
    p3.classList.add("droite2");
    p4.classList.add("droite1");
    p5.classList.add("centre");
  }
}