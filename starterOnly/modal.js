function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// --------------------------Close modal------------------------ //

// Look for the close modal button

const closeBtn = document.getElementsByClassName("close");

//Function for closing modal after click
function closeModal() {
  modalbg.style.display = "none";
  console.log(closeBtn);
}

//-------------------------------------------------------------------//

///////////////////// Form validation /////////////////////

// First, we get all elements that we are going to use //

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");

const locations = document.getElementById("locations")

const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");


const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const submit = document.getElementsByClassName("btn-submit")

//------------------------------------------------------------//

// Then, we create our error messages //

const firstNameError = document.getElementById("firstNameErrorMsg");
const lastNameError = document.getElementById("lastNameErrorMsg");
const emailError = document.getElementById("emailErrorMsg");
const birthdateError = document.getElementById("birthdateErrorMsg");
const quantityError = document.getElementById("quantityErrorMsg");


const locationsError = document.getElementById("locationsErrorMsg")

const location1Error = document.getElementById("location1ErrorMsg");
const location2Error = document.getElementById("location2ErrorMsg");
const location3Error = document.getElementById("location3ErrorMsg");
const location4Error = document.getElementById("location4ErrorMsg");
const location5Error = document.getElementById("location5ErrorMsg");
const location6Error= document.getElementById("location6ErrorMsg");
const checkbox1Error = document.getElementById("checkbox1ErrorMsg");
const checkbox2Error = document.getElementById("checkbox2ErrorMsg");

// Submit button //

const submitError = document.getElementsByClassName("btn-submitErrorMsg")

//------------------------------------------------------------//


// Handling firstName Errors

firstName.addEventListener("input", (e) => {
  if (e.target.value.length == 0) {
    firstNameError.innerHTML = "";
    valueFirstName = null;
    console.log(valueFirstName);
  } else if (e.target.value.length < 3 || e.target.value.length > 25) {
    firstNameError.innerHTML =
      "Le prénom doit comporter entre 3 et 25 caractères";
    valueFirstName = null;
  }
  if (e.target.value.match(/^[a-z A-Z]{3,25}$/)) {
    firstNameError.innerHTML = "";
    valueFirstName = e.target.value;
  }
  if (
    !e.target.value.match(/^[a-z A-Z]{3,25}$/) &&
    e.target.value.length > 3 &&
    e.target.value.length < 25
  ) {
    firstNameError.innerHTML =
      "le prénom ne doit pas contenir de caractère spécial (accent, chiffre)";
    console.log("caractère spécial");
  }
});

//------------------------------------------------------------//

// Gestion du lastName

lastName.addEventListener("input", (e) => {
  if (e.target.value.length == 0) {
    lastNameError.innerHTML = "";
    valueFirstName = null;
  } else if (e.target.value.length < 3 || e.target.value.length > 25) {
    lastNameError.innerHTML = "Le nom doit comporter entre 3 et 25 caractères";
    valueFirstName = null;
  }
  if (e.target.value.match(/^[a-z A-Z]{3,25}$/)) {
    lastNameError.innerHTML = "";
    valueLastName = e.target.value;
  }
  if (
    !e.target.value.match(/^[a-z A-Z]{3,25}$/) &&
    e.target.value.length > 3 &&
    e.target.value.length < 25
  ) {
    lastNameError.innerHTML =
      "le nom ne doit pas contenir de caractère spécial (accent, chiffre)";
    console.log("caractère spécial");
  }
});

//------------------------------------------------------------//

// Gestion du mail

email.addEventListener("input", (e) => {
  if (e.target.value.length == 0) {
    emailError.innerHTML = "";
    valueEmail = null;
  } else if (e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    emailError.innerHTML = "";
    valueEmail = e.target.value;
  }
  if (
    !e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) &&
    !e.target.value == 0
  ) {
    emailError.innerHTML =
      "un email doit être écrit avec un @ un . et des caractères (ex: gameon@gmail.com)";
    valueEmail = null;
  }
});

//------------------------------------------------------------//

// Gestion du birthdate

birthdate.addEventListener("input", (e) => {
 console.log(e.target.value);
  if (e.target.value.length == 0) {
    birthdateError.innerHTML = "";
    valueBirthdate = null;
  } else if (e.target.value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
    birthdateError.innerHTML = "";
    valueBirthdate = e.target.value;
  } else {
    birthdateError.innerHTML =
      "La date de naissance doit correspondre au format jj/mm/aaaa";
    valueBirthdate = null;
  }
});

//------------------------------------------------------------//


// Gestion de la quantity

quantity.addEventListener("input", (e) => {
  console.log(e.target.value);
   if (e.target.value.length == 0) {
     quantityError.innerHTML = "";
     valueQuantity = null;
   } else if (e.target.value.match(/^((100((\.|,)[0-9]{1,2})?)|([0-9]{1,2}((\.|,)[0-9]{0,2})?))$/)) {
     quantityError.innerHTML = "";
     valueQuantity = e.target.value;
   } else {
     quantityError.innerHTML =
       "Le nombre doit être compris entre 0 et 100";
     valueQuantity = null;
   }
 });
 
 //------------------------------------------------------------//


// Gestion du cities checkbox

locations.addEventListener("input", (e) => {
  console.log(e.target.value);
   if(location1[0].checked == true | location2.checked == true | location3.checked == true | location4.checked == true | location5.checked == true | location6.checked == true){
    console.log("ça a été coché")
   } else {
    locationsError.innerHTML =
       "Il est obligatoire de cocher une case";
     valueQuantity = null;
   } 
  });
 
 //------------------------------------------------------------//


// objet contact

let users = [];
const addUser = (e) => {
  e.preventDefault(); // Empêcher le rechargement de la page lors du clic
  let user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    birthdate: birthdate.value,
    quantity: quantity.value,
  };
  users.push(user);
  document.querySelectorAll(".bground")[0].reset(); // Pour reset le form
  //Vérification de la prise en compte de la création de l'objet

  console.warn("added", { users });

  // stockage en localStorage 

  localStorage.setItem("users", JSON.stringify(users));
  closeModal();
};