'use strict';



let arrofVotes = [];
let arrOfshowen = [];
let img1 = document.getElementById('imge1');
let img2 = document.getElementById('imge2');
let img3 = document.getElementById('imge3');
let containar = document.getElementById('busimg');
let max = 25;
let count = 0;

let leftIndex;
let rightIndex;
let middelIndex;
let arrofNames = [];

function BusMall(name, source) {
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.shown = 0;
  BusMall.productName.push(this);
  arrofNames.push(this.name);
}

BusMall.productName = [];

new BusMall('bag', '../images/bag.jpg');
new BusMall('banana', '../images/banana.jpg');
new BusMall('bathroom', '../images/bathroom.jpg');
new BusMall('boots', '../images/boots.jpg');
new BusMall('breakfast', '../images/breakfast.jpg');
new BusMall('bubblegum', '../images/bubblegum.jpg');
new BusMall('chair', '../images/chair.jpg');
new BusMall('cthulhu', '../images/cthulhu.jpg');
new BusMall('dog-duck', '../images/dog-duck.jpg');
new BusMall('dragon', '../images/dragon.jpg');
new BusMall('pen', '../images/pen.jpg');
new BusMall('pet-sweep', '../images/pet-sweep.jpg');
new BusMall('scissors', '../images/scissors.jpg');
new BusMall('shark', '../images/shark.jpg');
new BusMall('sweep', '../images/sweep.png');
new BusMall('tauntaun', '../images/tauntaun.jpg');
new BusMall('unicorn', '../images/unicorn.jpg');
new BusMall('usb', '../images/usb.gif');
new BusMall('water-can', '../images/water-can.jpg');
new BusMall('wine-glass', '../images/wine-glass.jpg');
//console.log(BusMall.productName);

function randomIndex() {
  return Math.floor(Math.random() * BusMall.productName.length);
};



function RenderImages() {


  leftIndex = randomIndex();
  middelIndex = randomIndex();
  rightIndex = randomIndex();


  while (leftIndex === middelIndex || leftIndex === rightIndex || middelIndex === rightIndex) {
    leftIndex = randomIndex();
    middelIndex = randomIndex();
    rightIndex = randomIndex();
  };
  console.log(BusMall.productName);
  img1.src = BusMall.productName[leftIndex].source;
  BusMall.productName[leftIndex].shown++;
  img2.src = BusMall.productName[rightIndex].source;
  BusMall.productName[rightIndex].shown++;
  img3.src = BusMall.productName[middelIndex].source;
  BusMall.productName[middelIndex].shown++;

}
RenderImages();



containar.addEventListener('click', handelClicking);

function handelClicking(event) {
  count++;
  if (max >= count) {
    if (event.target.id === 'imge1') {
      BusMall.productName[leftIndex].votes++;
    } else if (event.target.id === 'imge3') {
      BusMall.productName[rightIndex].votes++;
    } else if
      (event.target.id === 'imge2') {
      BusMall.productName[middelIndex].votes++;
    } else {
      alert('you should click on the image');
      count--;


    }
    RenderImages();

  }
  else {
    //renderList();
    containar.removeEventListener('click',handelClicking);
  }
}

let button = document.getElementById('click');
button.addEventListener('click', showingList);
 function showingList(){
  renderList();
 button.removeEventListener('click',showingList);

}





function renderList() {
  let ul = document.getElementById('list');
  for (let i = 0; i < BusMall.productName.length; i++) {
    arrofVotes.push(BusMall.productName[i].votes);
    arrOfshowen.push(BusMall.productName[i].shown);
    let li = document.createElement('vote');
    ul.appendChild(li);
    li.textContent = `${BusMall.productName[i].name}it has ${BusMall.productName[i].votes} Votes and its seen ${BusMall.productName[i].shown}`;

  }


}



function genrateRandomIndex() {
  return Math.floor(Math.random() * BusMall.productName.length);
}

