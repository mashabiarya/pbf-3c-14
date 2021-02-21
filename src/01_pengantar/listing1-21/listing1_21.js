let vowels = ['a','e','i','o','u'];
let numbers = [1,2,3];

let randomLetters = ['c','z',...vowels,'b'];
let randomNumbers = [...numbers,7,9];

console.log(randomLetters);
console.log(randomNumbers);


function alphabet(...letters) {
  console.log(letters);    
  
}      

alphabet("a");
alphabet("a","b","c");
alphabet("m","n","o","p","q","r","s","t","u","v","w","x","y","z");



