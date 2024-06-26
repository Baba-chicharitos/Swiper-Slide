const left = document.getElementById("left");
const right = document.getElementById("right");
const p1 = document.getElementById("photo1");
const p2 = document.getElementById("photo2");
const p3 = document.getElementById("photo3");
const p4 = document.getElementById("photo4");
const p5 = document.getElementById("photo5");
const po1 = document.getElementById("po1");
const po2 = document.getElementById("po2");
const po3 = document.getElementById("po3");
const po4 = document.getElementById("po4");
const po5 = document.getElementById("po5");
let y = 3;

function countPoint() {
  reset();
  if (y === 1) {
    p1.classList.add("centre");
    p2.classList.add("gauche1");
    p3.classList.add("gauche2");
    p4.classList.add("gauche3");
    p5.classList.add("gauche4");
    left.classList.add("notAvailable");
    po1.classList.add("grand");
  } else if (y === 2) {
    p1.classList.add("droite1");
    p2.classList.add("centre");
    p3.classList.add("gauche1");
    p4.classList.add("gauche2");
    p5.classList.add("gauche3");
    left.classList.remove("notAvailable");
    po2.classList.add("grand");
  } else if (y === 3) {
    p1.classList.add("droite2");
    p2.classList.add("droite1");
    p3.classList.add("centre");
    p4.classList.add("gauche1");
    p5.classList.add("gauche2");
    po3.classList.add("grand");
  } else if (y === 4) {
    p1.classList.add("droite3");
    p2.classList.add("droite2");
    p3.classList.add("droite1");
    p4.classList.add("centre");
    p5.classList.add("gauche1");
    right.classList.remove("notAvailable");
    po4.classList.add("grand");
  } else if (y === 5) {
    p1.classList.add("droite4");
    p2.classList.add("droite3");
    p3.classList.add("droite2");
    p4.classList.add("droite1");
    p5.classList.add("centre");
    right.classList.add("notAvailable");
    po5.classList.add("grand");
  }
}

function reset() {
  p1.classList.remove(
    "droite1",
    "droite2",
    "droite3",
    "droite4",
    "centre",
    "gauche1",
    "gauche2",
    "gauche3",
    "gauche4"
  );
  p2.classList.remove(
    "droite1",
    "droite2",
    "droite3",
    "droite4",
    "centre",
    "gauche1",
    "gauche2",
    "gauche3",
    "gauche4"
  );
  p3.classList.remove(
    "droite1",
    "droite2",
    "droite3",
    "droite4",
    "centre",
    "gauche1",
    "gauche2",
    "gauche3",
    "gauche4"
  );
  p4.classList.remove(
    "droite1",
    "droite2",
    "droite3",
    "droite4",
    "centre",
    "gauche1",
    "gauche2",
    "gauche3",
    "gauche4"
  );
  p5.classList.remove(
    "droite1",
    "droite2",
    "droite3",
    "droite4",
    "centre",
    "gauche1",
    "gauche2",
    "gauche3",
    "gauche4"
  );
  po1.classList.remove("grand");
  po2.classList.remove("grand");
  po3.classList.remove("grand");
  po4.classList.remove("grand");
  po5.classList.remove("grand");
}

reset();
countPoint();

function turnLeft() {
  if (y >= 1) {
    y = y - 1;
    reset();
    countPoint();
    console.log(y);
  } else if (y < 1) {
    y = 1;
    countPoint();
  }
}

function turnRight() {
  if (y <= 5) {
    y = y + 1;
    reset();
    countPoint();
  } else if (y > 5) {
    y = 5;
    countPoint();
  }
  console.log(y);
}

function open1() {
  y = 1;
  countPoint();
}

function open2() {
  y = 2;
  countPoint();
}

function open3() {
  y = 3;
  countPoint();
}

function open4() {
  y = 4;
  countPoint();
}

function open5() {
  y = 5;
  countPoint();
}
