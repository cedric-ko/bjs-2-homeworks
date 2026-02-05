"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr; 
  }
    
  if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x); 
    return arr;
  }
    
  if (d > 0) {
    let dSqrRoot = Math.sqrt(d);
        
    let x1 = (-b + dSqrRoot) / (2 * a);
    let x2 = (-b - dSqrRoot) / (2 * a);
        
    arr.push(x1); 
    arr.push(x2); 
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}