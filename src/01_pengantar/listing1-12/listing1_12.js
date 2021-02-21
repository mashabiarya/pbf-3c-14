var countClosure = function() { 
    // local variable 
    var counter = 1;
    // return function to be called after termination 'encloses' lexical scope
    return function () {
      console.log(counter); // var counter is accesible
      counter += 1; // counter can be incremented and persists in outer scope
    }
  };
  
  // Call to countClosure function
  var mycounter = countClosure();
  
  // countClosure function is done, but still invoked to trigger its return method 
  mycounter(); 
  mycounter(); 
  mycounter(); 
  
  
  
  var buttonMaker = function(value) { 
    // local variable assigned input argument
    var name = value;
    // return functions to be called  after termination 'encloses' lexical scope
    return { 
      name: function() { 
        console.log("Button name is " + name); // var name is accesible
      },
  
      click : function() { 
        console.log("Clicked on " + name); // var name is accesible
      },
  
      hover : function() { 
        console.log("Hovered over " + name); // var name is accesible
      }
    }
  }
  
  // Call to buttonMaker function with different input values
  var redBtn = buttonMaker("Red");
  var yellowBtn = buttonMaker("Yellow");
  var blueBtn = buttonMaker("Blue");
  // buttonMaker function is done, but can still return different results
  
  
  // note the following function calls on buttonMaker have access to the 
  // var 'name' in buttonMaker, even though the buttonMaker function is done
  // This is because all lexically scoped variables are 'enclosed' with the
  // return result, hence the name 'closure'
  redBtn.name(); 
  redBtn.click();
  yellowBtn.click();
  blueBtn.click();
  redBtn.hover();
  yellowBtn.hover();
  