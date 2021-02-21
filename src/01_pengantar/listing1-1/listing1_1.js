var letter = 'a';
var number = 1; 

function testing() { 
  var number = 2;
  console.log(number);
  console.log(letter);
  letter = 'e';
}

testing();
console.log(number);
console.log(letter);