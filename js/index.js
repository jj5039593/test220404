"use strict";

const gallery = document.querySelector('.gallery');
const galleryUl = document.querySelector('.gallery>ul');
const galleryLi = document.querySelectorAll('.gallery>ul>li');


const arrBg=[];

for(let i=0;i<galleryLi.length;i++){
    arrBg.push(`url(img/g${i}.jpg) no-repeat 50%/cover`);
    galleryLi[i].style.background =arrBg[i];
}

let i=-1;

function autoGallery(){

    i++

    const gap = galleryLi[1].offsetLeft - galleryLi[0].offsetLeft;
    const goto = (-i*gap)+'px'
    
    gallery.style.left=goto;
    gallery.style.filter='grayscale(1.1)';
    gallery.style.transition='all 0.3s';

    if(i>=galleryLi.length-1){i=-1};
};

let setIn = setInterval(autoGallery,4000);

(()=>autoGallery())();


const arrow=document.querySelectorAll('span.arrow');

arrow.forEach(el=>{
    el.addEventListener('mouseout',()=>{setIn=setInterval(autoGallery,4000)})
    el.addEventListener('mouseover',()=>{clearInterval(setIn)});
});

const bConLi =document.querySelectorAll('.b-con>.items>ul>li')

bConLi.forEach(el=>{
    el.addEventListener('mouseout',()=>{setIn=setInterval(autoGallery,4000)})
    el.addEventListener('mouseover',()=>{clearInterval(setIn)});
});

