var tableTennis = {}
tableTennis.counter = 0;

tableTennis.play = function() { 
  // 'this' is the tableTennis object in this scope
  // Use placeholder 'that' to access 'this' in inner functions
  var that = this;
  var swing = function() { 
    // 'this' is the local function object in this scope
    // must use 'that' to access outer scope
    that.counter++;
  }
  var ping = function() { 
    // 'this' is the local function object in this scope
    // must use 'that' to access outer scope
    console.log("Ping " + that.counter);
  }
  var pong = function() { 
    // 'this' is the local function object in this scope
    // must use 'that' to access outer scope
    console.log("Pong " + that.counter);
  }
  // Call inner functions in sequence 
  swing();
  ping();
  pong();
}

// Call tableTennis.play() three times 
tableTennis.play();
tableTennis.play();
tableTennis.play();


tableTennis.playApply = function() { 
  // 'this' is the tableTennis object in this scope
  var swing = function() { 
    // Use this local function object, must use apply() on call to change 'this' 
    this.counter++;
  }
  var ping = function() { 
    // Use this local function object, must use apply() on call to change 'this'
    console.log("Ping " + this.counter);
  }
  var pong = function() { 
    // Use this local function object, must use apply() on call to change 'this'
    console.log("Pong " + this.counter);
  }
  // Call inner functions in sequence 
  // with apply() so 'this'(tableTennis object) is visible inside inner functions 
  swing.apply(this);
  ping.apply(this);
  pong.apply(this);

}

// Reset counter 
tableTennis.counter = 0;
// Call tableTennis.playApply() three times
tableTennis.playApply();
tableTennis.playApply();
tableTennis.playApply();