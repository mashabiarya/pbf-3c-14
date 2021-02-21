function plainEchoer(message) {
    console.log(message);
    return message;
  }
  
  plainEchoer("Hello there from plainEchoer()!");
  console.log("Now passing a function as value from plainEchoer()...");
  plainEchoer(plainEchoer(plainEchoer(plainEchoer("Hello there from plainEchoer()!"))));
  
  
  var echoer = function(message) { 
    console.log(message);
    return message;
  }
  
  echoer("Hello there from echoer()!");
  console.log("Now passing a function as value from echoer()...")
  echoer(echoer(echoer(echoer("Hello there from echoer()!"))));