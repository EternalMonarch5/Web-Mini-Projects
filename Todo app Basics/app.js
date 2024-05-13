let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
  let item=document.createElement("li");
  item.innerText=inp.value;
  let delBtn=document.createElement("button");
  delBtn.innerText="delete";
  delBtn.classList.add("delete");
  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value= ""; //clears the input section after button is clicked
});

ul.addEventListener("click",function(event){
  if(event.target.nodeName=="BUTTON"){
   let ListItem=event.target.parentElement;
   ListItem.remove();
  }
});