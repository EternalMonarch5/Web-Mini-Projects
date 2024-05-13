let btn=document.querySelector("button");

btn.addEventListener("click",colorChange);


function colorChange(){

  let div=document.querySelector(".main");
  let red=Math.floor(Math.random()*255);
  let green=Math.floor(Math.random()*255);
  let blue=Math.floor(Math.random()*255);

  let rainbow=`rgb(${red},${green},${blue})`;
  let h1=document.querySelector("h1");
  h1.innerText=rainbow;

  div.style.backgroundColor=rainbow;
}