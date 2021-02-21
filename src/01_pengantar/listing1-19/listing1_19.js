var tableTennis = {}
tableTennis.counter = 0;

tableTennis.playArrow = function() { 
  // 'this' is the tableTennis object in this scope
  let swing = () => { 
    // 'this' in arrow functions is the outer function object in this scope
    // can use 'this' to access outer scope
    this.counter++;
  }
  let ping = () => {
    // 'this' in arrow functions is the outer function object in this scope
    // can use 'this' to access outer scope  
    console.log("Ping " + this.counter);
  }
  var pong = () => { 
    // 'this' in arrow functions is the outer function object in this scope
    // can use 'this' to access outer scope
    console.log("Ping " + this.counter);
  }
  // Call inner functions in sequence 
  swing();
  ping();
  pong();
}

// Call tableTennis.playArrow() three times 
tableTennis.playArrow();
tableTennis.playArrow();
tableTennis.playArrow();