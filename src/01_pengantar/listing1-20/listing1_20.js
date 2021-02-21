// Function with default parameter value
function plainEchoer(message="Hello World!") {
    console.log(message);
    return message;
  }
  
  plainEchoer();
  plainEchoer("Hello there!");
  
  
  // Arrow based expression with default parameter value 
  let arrowEchoer = (message="Good day") => {console.log(message);return message};
  
  arrowEchoer();
  arrowEchoer("Good night");