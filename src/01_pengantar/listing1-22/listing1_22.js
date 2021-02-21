let vowels = ['a','e','i','o','u'];
// Template literal
let message = `Vowel letters are ${vowels}`;

console.log(message);

let cost = 5;
const tax = 7.25;

// Template literal
console.log(`Total cost with tax: ${cost * (1 + tax/100)}`);


function worldMessage(message) { 
  // Template literal
  console.log(`${message} World!`)
}

worldMessage("Hello");
worldMessage("Brave new");

// Function for tagged template literal
function thankYouEmail(message,recipient="Customer",sender="Support") {
  return message[0] + recipient + message[1] + sender;
}

// Define parameters to use in template literal
let recipient, sender;
// Call tagged template literal
let boilerplateEmail = thankYouEmail`Dear ${recipient},

Thank you for contacting us...

Best, 
${sender}`;

console.log(boilerplateEmail);

// Redefine parameters to use in template literal
recipient = 'Jen';
sender = 'Sally';
// Call tagged template literal
let personalEmail = thankYouEmail`Hi ${recipient},

I read...

Thanks, 
${sender}`;

console.log(personalEmail);
