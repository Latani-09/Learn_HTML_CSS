document.addEventListener("DOMContentLoaded", function() {        
    var button = document.querySelector("button");
    console.log('query selector ',button)
    
    button.addEventListener("click", function() {
        const curColour = document.body.style.backgroundColor;
        currentColor = curColour === 'red' ? 'blue' : 'red';
        document.body.style.backgroundColor = currentColor ;
    });
      });
function changeFlexStyle(value){
  
    console.log('style',document.getElementById('flex1').style.justifyContent);
    
document.getElementById('flex1').style.justifyContent=value;

}
function changealignContent(value){
  
    console.log('style',document.getElementById('flex1').style.alignContent);
    
document.getElementById('flex1').style.alignContent=value;

}
function changeBackground(){
    const curColour = document.body.style.backgroundColor;
        currentColor = curColour === 'red' ? 'blue' : 'red';
        document.body.style.backgroundColor = currentColor ;
}