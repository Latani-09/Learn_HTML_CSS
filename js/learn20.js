var a; //no nees to intialized when declared
a=9;   //can be reassigned
var a;  //will be redeclared

//let will not allow any reclaration any variable var /let
let b;
b=5;
// let a;  
// cannot redeclare block scoped variables error thrown
b=0;  //can be reassigned

const c=2; //need to be intiliazed at declaration
//a=5   can't be reassigned.

for (let i=5;i<9;i++)
{
console.log('i in block ',i) 
}
/*
console.log('i out of the block',i);
cannot be accessed out of the block if it is declared inside for loop

*/
let j=0;
for (;j<9;j++){
console.log('j in block ',j) 
}
console.log('j out of the block',j);



///RegExp
const obj = /e/.exec("The best things in life are free!");
console.log("Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input)