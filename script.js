window.onload = function(){

let firstValues = [];
let secondValues = [];
let state = 1;
let mainOperator;

const nums =  document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("equals");
const outputScreen = document.getElementById("outputScreen");
 
//add the clicked number to the first or second values Arrays
for (const num of nums) {
  num.addEventListener("click", function(){
    if( state == 1){
     firstValues.push(num.textContent);
     outputScreen.textContent = firstValues.join('');
    } else if(state == 2) {
     secondValues.push(num.textContent); 
     outputScreen.textContent = secondValues.join('');
    }
  });
};
  
//If an Operator is clicked, show it on the screen, store it on the mainOperator and change state
 for (const operator of operators) {
   operator.addEventListener("click", function(){
     mainOperator = operator.textContent;
     outputScreen.textContent = mainOperator;
     state = 2;
     console.log(state)
   });
 };
  
//back one 
document.querySelector("#back").addEventListener("click", function(){
  firstValues.pop();
  outputScreen.textContent = firstValues.join('');
})
  
//reset and back to 0
document.querySelector("#reset").addEventListener("click", function(){
  firstValues = [];
  secondValues = [];
  outputScreen.textContent = "0";
});
  

  
//If equal is pushed pass to the operate function the first Array, the operator and the second Array
equals.addEventListener("click", function(){
  let results = mathOperand( mainOperator, firstValues, secondValues );
  
 
  //Show it on the screen
  outputScreen.textContent = results;
  
  //Now the firstValues Array should be equal to the result so we can keep operating
  //firstValues = firstValues.toString().split(' ') ;
  state = 1;
  secondValues = [];
  
  return firstValues = Array.from( results.toString() ); 

});
  
  //Operate function
const mathOperand = (operand, arr1, arr2) => {

  arr1 = parseFloat( arr1.join('') );
  arr2 = parseFloat( arr2.join('') );
                  
  console.log(arr1, arr2);
  
  if( operand == '+' ){
    return arr1 + arr2;
  } else if( operand == '*' ){
    return arr1 * arr2;
  } else if( operand == '-' ){
    return arr1 - arr2;
  } else if( operand == '/' ){
    return arr1 / arr2;
  }
};
  
};





//Mai todoses:
//- Numeros en pantalla en morenito
//- Al clicar, que parezca que pitjis
//- 0 ny default
//-Digits font