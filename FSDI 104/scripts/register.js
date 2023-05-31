//object literal

let petSalon = {
  name: "The Fashion Pet",
  address: {
    country: "Mexico",
    city: "Tijuana",
    zip: "23456",
  },
  phone: "6659987311",
  pets: [],
};

//create the Pet constructor (name,age,gender,breed,service)

function Pet(name, age, gender, breed, service, type) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.type = type;
}

function displayInformation() {
  document.getElementById("info").innerHTML = ` 
<p> Welcome to ${petSalon.name}</p>
<p> Located in ${petSalon.address.city} and ${petSalon.address.country} zip code ${petSalon.address.zip} </p>
<p> name: ${petSalon.pets[0].name}</p>
<p> name: ${petSalon.pets[1].name}</p>
`;
}
//get the inputs from the HTML
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");

function register() {
  //create the obj
  let newPet = new Pet(
    inputName.value,
    inputAge.value,
    inputGender.value,
    inputBreed.value,
    inputService.value,
    inputType.value
  );
  //display the obj
  petSalon.pets.push(newPet);
  petSalon.pets.pop(newPet);
}

function init() {
  //hook events
  //create two pets using the Pet constructor
  let scooby = new Pet("Scooby", 21, "Male", "Great Dane", "Vaccines");
  let snoop = new Pet("Snoop", 30, "Male", "Atomic Dog", "Vaccizzles");
  petSalon.pets.push(scooby, snoop);
  petSalon.pets.pop(scooby, snoop);
}

window.onload = init; //wait to render the HTML
