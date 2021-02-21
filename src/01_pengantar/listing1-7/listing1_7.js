// Contents of fantastic.js
var fantasticNS = {};

(function(namespace) { 
    namespace.render = function() { console.log("Hello from fantasticNS.render()!") };
})(fantasticNS);

// Contents of wonderful.js 
var wonderfulNS = {};

(function() {
    this.render =  function() {  console.log("Hello from wonderfulNS.render()!") };
}).apply(wonderfulNS);


// Contents of amazing.js
var amazingNS = {};
(function() {
  var privateRender = function() {  console.log("Hello from amazingNS.render()!") };
  this.render = function() { privateRender() };
}).call(amazingNS);


// Let's call the render() method for each of the different libraries
fantasticNS.render();
wonderfulNS.render();
amazingNS.privateRenderer; // This does nothing because privateRenderer is local to IIFE block
amazingNS.render();