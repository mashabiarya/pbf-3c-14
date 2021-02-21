var message = "Good day!";

var morning = { message: "Good morning!" }

var afternoon = { message: "Good afternoon!" }

var evening = { message: "Good evening!" }

var greeter = function() {
  // this always varies depending on calling context
  var message = "Good night!";
  return this.message;
}

// Call to greeter() 
// uses this.message=(global)message since global is the calling context
console.log(greeter()); // Good day!

// Call to greeter()) modifies calling context with bind()
// modifies this.message=morning.message since morning is the calling context
console.log(greeter.bind(morning)()); // Good morning!
// modifies this.message=afternoon.message since afternoon is the calling context
console.log(greeter.bind(afternoon)()); // Good afternoon!
// modifies this.message=evening.message since evening is the calling context
console.log(greeter.bind(evening)()); // Good evening!


var strictGreeter = function() { 
  "use strict";
  var message = "Good night!";
  // 'use strict' forces 'this.message' to be in local scope/context 
  return this.message;  
}

// Call to strictGreeter() which uses 'use strict'
// error because this and this.message are undefined in local context
console.log(strictGreeter()); // Cannot read property 'message' of undefined