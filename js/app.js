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


function saveTols(){
 let  formArr = JSON.stringify(BusMall.productName);
  localStorage.setItem('check', formArr);
}


function getFromls() {
  let Feed = localStorage.getItem('check');
 let data = JSON.parse(Feed);
 
  if (Feed !== null){
    BusMall.productName= data ;
  }
}



function randomIndex() {
  return Math.floor(Math.random() * BusMall.productName.length);
};

let arrIndex=[];
let check1;
let check2;
let check3;

function RenderImages() {


  //leftIndex = randomIndex();
  //middelIndex = randomIndex();
  //rightIndex = randomIndex();

  //heck1=arrIndex.includes(leftIndex);
  //check2=arrIndex.includes(rightIndex);
  //check3=arrIndex.includes(middelIndex);

  while (leftIndex === middelIndex || leftIndex === rightIndex || middelIndex === rightIndex  || arrIndex.includes(leftIndex)||arrIndex.includes(rightIndex)||arrIndex.includes(middelIndex)) {
    leftIndex = randomIndex();
    middelIndex = randomIndex();
    rightIndex = randomIndex();

    //check1=arrIndex.includes(leftIndex);
    //check2=arrIndex.includes(rightIndex);
    //check3=arrIndex.includes(middelIndex);
  };

  //console.log(BusMall.productName);
  img1.src = BusMall.productName[leftIndex].source;
  BusMall.productName[leftIndex].shown++;
  img2.src = BusMall.productName[rightIndex].source;
  BusMall.productName[rightIndex].shown++;
  img3.src = BusMall.productName[middelIndex].source;
  BusMall.productName[middelIndex].shown++;


  arrIndex=[leftIndex,rightIndex,middelIndex];

}
RenderImages();



containar.addEventListener('click', handelClicking);

function handelClicking(event) {
  count++;
if (event.target.id!== 'busimg'){



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
    saveTols();
    RenderImages();

  }
}
  else {
    //renderList();
    getFromls();
    containar.removeEventListener('click',handelClicking);
   
  }
}

let button = document.getElementById('click');
button.addEventListener('click', showingList);
 function showingList(){
  renderList();
  chart()
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








function chart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, { 
      type: 'bar',
      data: {
          labels:  arrofNames,
          datasets: [{
              label: 'Number of Votes',
              data: arrofVotes,
              backgroundColor: 
                  'rgba(191, 63, 63, 0.7)',
              
              borderWidth: 1
          }, {
              label: 'Times of Shown',
              data: arrOfshowen,
              backgroundColor: 
                  'rgba(63, 191, 63, 0.7)',
                  
                  borderWidth: 1

              }]

          },
 });
}
getFromls();
console.log(BusMall.productName);