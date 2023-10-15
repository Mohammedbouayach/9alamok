let text = document.getElementById("text");

let name= document.getElementById("name");

let btn= document.getElementById("btn");




text.oninput=function(){
 
 if (text.value.trim()!== '') {
  btn.style.display="inline"
 }
 else{
btn.style.display="none"
 }
}







// crat data
let data;
if(localStorage.prodact != null){
 data = JSON.parse(localStorage.prodact)
}
else{
 data= []
}


btn.onclick=function(){
let newdata = {
 text:text.value,
 name:name.value,
}
data.push(newdata);
localStorage.setItem("prodact",JSON.stringify(data));


clear()
read()


}
// clear input

function clear(){
  text.value="";
  name.value="";
  btn.style.display="none"
}


// Read

function read(){
 let cart = "";
 for (let i = 0; i < data.length; i++) {
  cart += `<div class="card">
  <div class="pen">
   <p> ${data[i].text}</p>
   <h3>${ data[i].name} </h3>

  
   </div>
   <div class="like">
   <i class="fa-solid fa-heart"></i>
     
   
   </div>
 
   </div>
   
  
  `
 
 }
 document.getElementById("card").innerHTML=cart
}read()


// dlet

function delet(i){
 
 data.splice(i,1);
 localStorage.prodact= JSON.stringify(data);
 read()
}




// like
  /* <button onclick="delet(${i})">مسح</button>*/