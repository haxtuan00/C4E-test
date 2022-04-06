
let arrColor=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let randomcolor=document.querySelector('button')
const bodyBGR = document.querySelector('body');
const H1 = document.querySelector('H1');
randomcolor.addEventListener('click',function(){
   let macolor='#'
    for(let i=0;i<6;i++){
     let n=Math.floor(Math.random() * (arrColor.length-1))
         macolor+=arrColor[n]
    }
    H1.innerText=macolor
    bodyBGR.style.backgroundColor=macolor
})