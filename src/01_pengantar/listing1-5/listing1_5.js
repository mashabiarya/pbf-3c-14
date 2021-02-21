console.log(helloDeclaration()); 
function helloDeclaration() {                                  
   return "Hello from a function declaration";  
}                         
console.log(helloDeclaration());


console.log(helloExpression());
var helloExpression = function() {                  
  return "Hello from a function expression";
}
console.log(helloExpression());