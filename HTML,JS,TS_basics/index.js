var name = "Nishant"; // because this is isn't insid eany function / opertaion this is a global variable
var age = 32; // define a variable
var isGraduate = true;
var laptop;
laptop = "lg";
console.log(name);

function alertUser() {
  var favChips = "Lays Blue"; // this variable is defined and destroyed inside the function itself so it cant be accessed outside this function
  console.log("This user has logged in" + name);
  //  alert("This user has logged in" + name);
}
alertUser();
// if. else, else if statements
function operators(num) {
  if (num > 20) {
    console.log("Number is greater than 20");
  } else if (num == 20) {
    console.log("number is equal to 20");
  } else {
    console.log("number is smaller than 20 ");
  }
}
operators(87);
function creditScore(score) {
  var creditLimit;
  switch (score) {
    case 800:
      creditLimit = "above 1 lac";
      break;
    case 700:
      creditLimit = "50,000 to 1,00,000";
      break;
    case 600:
      creditLimit = "10,000 tp 25,000";
      break;
    default:
      creditLimit = "not eligible";
  }
  console.log(creditLimit);
}

function counting() {
  for (let i = 1; i < 10; i++) {
    console.log(i);
  }
}

var car= new Object();
car.brand = "Mercedes"
car.model="C class"
car.price = 6000000

console.log(car);

var names = ["nishant", "vivek", "Abhishek"];
console.log(names);
counting();
creditScore(800);




