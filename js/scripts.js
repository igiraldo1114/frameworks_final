
// user feedback to be collected 
let feedback = [];

function addFeedback(message) {
  feedback.push(message);
  return feedback;
}

// validate emails 
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}
console.log(validateEmail("test@example.com")); // true


// for when a user creates an account for a further advanced site they get logged in pop up 
let name = "Alice"

function GreetMe() {
  console.log("Hello world.");
}

console.log(GreetMe(name))


// to enable the automatic slideshow for the user to view all photos 
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
