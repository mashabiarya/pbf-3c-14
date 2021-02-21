// Arrow based expression
let arrowEchoer = message => {console.log(message);return message};

arrowEchoer(arrowEchoer(arrowEchoer(arrowEchoer("Hello there from arrowEchoer()!"))));

// Let's try an arrow based IIFE
let primeNumbers = [2,3,5,7,11];

(() => {
  for (let k = 0; k < primeNumbers.length; k++) {
    console.log(primeNumbers[k]);
  } 
})();


// Arrow closure
let countClosureArrow = (() => { let counter = 1; return () => {console.log(counter); counter += 1;} })();

countClosureArrow();
countClosureArrow();
countClosureArrow();
