'use strict';




let img1 = document.getElementById('imge1');
let img2 = document.getElementById('imge2');
let img3 = document.getElementById('imge3');
let max = 25 ;
let count = 0 ;

let leftIndex; 
let rightIndex;
let middelIndex;

function BusMall (name , source ){
this.name = name ;
     this.source = source;
    this.votes=0;
    

    BusMall.productName.push(this);
}
    BusMall.productName=[];

    

new BusMall('bag','../images/bag.jpg' );
new BusMall('banana','../images/banana.jpg' );
new BusMall('bathroom','../images/bathroom.jpg' );
new BusMall('boots','../images/boots.jpg' );
new BusMall('breakfast','../images/breakfast.jpg' );
new BusMall('bubblegum','../images/bubblegum.jpg' );
new BusMall('chair','../images/chair.jpg' );
new BusMall('cthulhu','../images/cthulhu.jpg' );
new BusMall('dog-duck','../images/dog-duck.jpg' );
new BusMall('dragon','../images/dragon.jpg' );
new BusMall('pen','/..images/pen.jpg' );
new BusMall('pet-sweep','/..images/pet-sweep.jpg' );
new BusMall('scissors','../images/scissors.jpg' );
new BusMall('shark','../images/shark.jpg' );
new BusMall('sweep','../images/sweep.png' );
new BusMall('tauntaun','../images/tauntaun.jpg' );
new BusMall('unicorn','../images/unicorn.jpg' );
new BusMall('usb','../images/usb.gif' );
new BusMall('water-can','../images/water-can.jpg' );
new BusMall('wine-glass','../images/wine-glass.jpg');
//console.log(BusMall.productName);

function randomIndex(){
    return Math.floor(Math.random() * BusMall.productName.length);
  };
  
  
  
  function RenderImages(){
  
    
    leftIndex = randomIndex();
    middelIndex = randomIndex();
    rightIndex = randomIndex();
      
    
    while(leftIndex === middelIndex || leftIndex === rightIndex || middelIndex === rightIndex){
      leftIndex = randomIndex();
      middelIndex = randomIndex();
      rightIndex = randomIndex();
    };

    img1.src = BusMall.productName[leftIndex].source;
    img2.src = BusMall.productName[rightIndex].source;
    img3.src = BusMall.productName[middelIndex].source;
  
    
    
  
  }
  RenderImages();
  
  

