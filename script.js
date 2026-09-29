const para=document.getElementById("para");
const button=document.getElementById("btn");
const checkbox=document.getElementById("check");
var index=0;

button.addEventListener("click",function(){
   let dis=["block","none"];
   para.style.display=dis[index];
   index++;

  if(index>dis.length-1){
    index=0;

  }
})

checkbox.addEventListener("click",function(){
    document.body.classList.toggle("dark_mode");
   
});

/*.IMG{
    width: 180vh;
    height: 100vh;
    z-index: 1;
    position: relative;
    left: -100px;

}*/
