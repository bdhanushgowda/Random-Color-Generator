'use strict';


var colors=['white','red','violet','purple','aqua','blue','yellow','green','grey'];
var length=colors.length-1;

var buttonControl=document.getElementById('btn');
var spanControl=document.querySelector('.color');

buttonControl.addEventListener('click',()=>{
var index=genrateRandomNumbers();
document.body.style.backgroundColor=colors[index];
spanControl.textContent=colors[index];

})

function genrateRandomNumbers(){
 return Math.round(Math.random()*length);
}