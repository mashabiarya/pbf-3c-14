var fantastic = { }

fantastic.render = function() {
       console.log("Hello from fantastic.render()!")
}

var wonderful = {
       render: function() { 
           console.log("Hello from wonderful.render()!");
          }
}

var amazing = (function () {
   return {
          render: function() { 
           console.log("Hello from amazing.render()!");
          }
       }
})();

fantastic.render();
wonderful.render();
amazing.render();