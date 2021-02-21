let number = 1;

// 500 lines later

// let with same name redeclared is an error
let number = 2;


let echoer = function(message) {
  // Reusing function argument name as let is an error
  let message = "Local message"; //Duplicate declaration "message"
  console.log(message);
  return message;
}

echoer("Hello there!");