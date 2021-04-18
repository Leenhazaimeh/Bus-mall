'use strict';




let img1 = document.getElementById('imge1');
let img2 = document.getElementById('imge2');
let img3 = document.getElementById('imge3');
let max = 25 ;
let count = 0 ;

let leftIndex; 
let rightIndex;
let middelIndex;

function BusMall (name , path ){
this.name = name ;
     this.path = path;
    this.shown = 0 ;

    BusMall.productName.push(this);
    BusMall.productName=[];

    
}
new BusMall('bag','images/bag.jpg' );
new BusMall('banana','images/banana.jpg' );
new BusMall('bathroom','images/bathroom.jpg' );
new BusMall('boots','images/boots.jpg' );
new BusMall('breakfast','images/breakfast.jpg' );
new BusMall('bubblegum','images/bubblegum.jpg' );
new BusMall('chair','images/chair.jpg' );
new BusMall('cthulhu','images/cthulhu.jpg' );
new BusMall('dog-duck','images/dog-duck.jpg' );
new BusMall('dragon','images/dragon.jpg' );
new BusMall('pen','images/pen.jpg' );
new BusMall('pet-sweep','images/pet-sweep.jpg' );
new BusMall('scissors','images/scissors.jpg' );
new BusMall('shark','images/shark.jpg' );
new BusMall('sweep','images/sweep.png' );
new BusMall('tauntaun','images/tauntaun.jpg' );
new BusMall('unicorn','images/unicorn.jpg' );
new BusMall('usb','images/usb.gif' );
new BusMall('water-can','images/water-can.jpg' );
new BusMall('wine-glass','images/wine-glass.jpg');
console.log(arrayProduct);



function randomImg(){ // this function is helper funciton to givr random image

    let randomI = Math.floor(Math.random()*arrayProduct.length);
    return randomI;
   
}
 console.log(randomImg());



 let imageLfet;
 let imageMiddle;
 let imageRight;


 function renderThreeImg (){
    
    imageLfet=randomImg();
    imageMiddle=randomImg();
    imageRight=randomImg();
   
    while(imageLfet===imageMiddle|| imageLfet===imageRight|imageMiddle===imageRight||indexImg.includes(imageLfet)||indexImg.includes(imageMiddle)||indexImg.includes(imageRight)){
        imageLfet=randomImg();
        imageMiddle=randomImg();
        imageRight=randomImg(); 

    }




indexImg[0] =imageLfet;
   indexImg[1]=imageMiddle;
   indexImg[2]=imageRight;

   console.log(indexImg);

   img1.setAttribute('src' , arrayProduct[imageLfet].srcpath);
   arrayProduct[imageLfet].shown++;
   img2.setAttribute('src' , arrayProduct[imageMiddle].srcpath);
   arrayProduct[imageMiddle].shown++;
   img3.setAttribute('src' , arrayProduct[imageRight].srcpath);
   arrayProduct[imageRight].shown++;

}  


renderThreeImg ();

console.log(arrayProduct);


div.addEventListener('click', countClick);
   
function countClick(event){
    div.addEventListener('click', countClick);
   
function countClick(event){

    if ( count <= max ){

        if  ( event.target.id === 'imge1' ){
           arrayProduct[imageLfet].click++;
           count++;

       

       }else if (event.target.id === 'imge2'){
           arrayProduct[imageMiddle].click++;

           count++;

        }else {
            arrayProduct[imageRight].click++;
 
            count++;
         
        }
 
        renderThreeImg();
        storedVotes ();
    } else {
        let  button = document.getElementById('click');
    
          button.addEventListener('click', result);
                
          function result (event) {
    
           let ulEl = document.getElementById('l1');
    
           let li ;
    
           for (let i = 0; i < arrayProduct.length ; i++){
            li = document.createElement('list');
            ul1.appendChild(li);
            li.textContent = `${arrayProduct[i].productName} had ${arrayProduct[i].click} Votes, and was seen ${arrayProduct[i].shown} times`;
            button.removeEventListener('click',result);
          }  
          for( let j = 0 ; j < arrayProduct.length ; j++){
            arrayShown.push(arrayProduct[j].shown);
            arrayVotes.push(arrayProduct[j].clickD);
        }
        console.log(arrayVotes);
        
       }
        div.removeEventListener('click',countClick);
      
     
    }
 
 
 