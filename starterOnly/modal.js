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
const locationRadioadioButtons = document.querySelectorAll(
  "input[name='location']"
);
const checkbox1 = document.getElementById("checkbox1");
const submit = document.getElementById("btn-submit")

//------------------------------------------------------------//

// Then, we create our error messages //

const firstNameError = document.getElementById("firstNameErrorMsg");
const lastNameError = document.getElementById("lastNameErrorMsg");
const emailError = document.getElementById("emailErrorMsg");
const birthdateError = document.getElementById("birthdateErrorMsg");
const quantityError = document.getElementById("quantityErrorMsg");
const locationsError = document.getElementById("locationsErrorMsg")
const checkbox1Error = document.getElementById("checkbox1ErrorMsg");
const submitError = document.getElementsByClassName("btn-submitErrorMsg")

//------------------------------------------------------------//
// Handling form validation //

let isValidFirst = false;
let isValidSecond = false;
let isValidMail = false;
let isValidBirthday= false;
let isValidQuantity = false;
let isValidLocation = false;
let isValidCheckbox = false;

//  firstName Errors

firstName.addEventListener("input", (e) => {
  // If nothing was written in this input, value null and isValidFirst false
  if (e.target.value.length == 0) {
    firstNameError.innerHTML = "Le prénom doit comporter entre 3 et 25 caractères";
    valueFirstName = null;
    isValidFirst = false;
    console.log(valueFirstName);
  // If we are not between 3 and 25 characters, we display an error message, value null and isValidFirst false
  } else if (e.target.value.length < 3 || e.target.value.length > 25) {
    firstNameError.classList.add("errorMsg")
    firstNameError.innerHTML =
      "Le prénom doit comporter entre 3 et 25 caractères";
    valueFirstName = null;
    isValidFirst = false;
  }
  // If we are between 3 and 25 characters, we display a green message, value equal to what is written and isValid true
  if (e.target.value.match(/^[a-z A-Z]{3,25}$/)) {
    firstNameError.classList.remove("errorMsg")
    firstNameError.innerHTML = "";
    valueFirstName = e.target.value;
    isValidFirst = true;
  }
  // If we are between 3 and 25 characters, but some special characters are there, we delete our class for green messages and add a class for errors. display a green message, value null and isValid false
  if (
    !e.target.value.match(/^[a-z A-Z]{3,25}$/) &&
    e.target.value.length > 3 &&
    e.target.value.length < 25
  ) {
    firstNameError.classList.add("errorMsg")
    firstNameError.innerHTML =
      "le prénom ne doit pas contenir de caractère spécial (accent, chiffre)";
    isValidFirst = false;
    valueFirstName = null;
  }
});

//------------------------------------------------------------//

// lastName Regex and messages style, same as firstName

lastName.addEventListener("input", (e) => {
  if (e.target.value.length == 0) {
    lastNameError.innerHTML = "";
    valueLastName = null;
    isValidSecond = false;
  } else if (e.target.value.length < 3 || e.target.value.length > 25) {
    lastNameError.classList.add("errorMsg")
    lastNameError.innerHTML = "Le nom doit comporter entre 3 et 25 caractères";
    valueLastName = null;
    isValidSecond = false;
  }
  if (e.target.value.match(/^[a-z A-Z]{3,25}$/)) {
    lastNameError.innerHTML = "";
    valueLastName = e.target.value;
    isValidSecond = true;
  }
  if (
    !e.target.value.match(/^[a-z A-Z]{3,25}$/) &&
    e.target.value.length > 3 &&
    e.target.value.length < 25
  ) {
    lastNameError.classList.add("errorMsg")
    lastNameError.innerHTML =
      "le nom ne doit pas contenir de caractère spécial (accent, chiffre)";
    console.log("caractère spécial");
    isValidSecond = false;
  }
});

//------------------------------------------------------------//

// Mail Regex and messages style

email.addEventListener("input", (e) => {
  if (e.target.value.length == 0) {
    emailError.innerHTML = "";
    valueEmail = null;
    isValidMail = false;
  } else if (e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    emailError.classList.remove("errorMsg")
    emailError.innerHTML = "";
    valueEmail = e.target.value;
    isValidMail = true;
  }
  if (
    !e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) &&
    !e.target.value == 0
  ) {
    emailError.classList.add("errorMsg")
    emailError.innerHTML =
      "un email doit être écrit avec un @ un . et des caractères (ex: gameon@gmail.com)";
    valueEmail = null;
    isValidMail = false;
  }
});

//------------------------------------------------------------//

// Birthdate Regex and messages style

birthdate.addEventListener("input", (e) => {
 console.log(e.target.value);
  if (e.target.value.length == 0) {
    birthdateError.innerHTML = "";
    valueBirthdate = null;
    isValidBirthday = false;
  } else if (e.target.value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
    birthdateError.classList.remove("errorMsg")
    birthdateError.innerHTML = "";
    valueBirthdate = e.target.value;
    isValidBirthday = true;
  } else {
    birthdateError.classList.add("errorMsg")
    birthdateError.innerHTML =
      "La date de naissance doit correspondre au format jj/mm/aaaa";
    valueBirthdate = null;
    isValidBirthday = false;
  }
});

//------------------------------------------------------------//


// Quantity Regex and messages style

quantity.addEventListener("input", (e) => {
  console.log(e.target.value);
   if (e.target.value.length == 0) {
    quantityError.classList.add("errorMsg")
    quantityError.innerHTML =
    "Le nombre doit être compris entre 0 et 100";
     valueQuantity = null;
     isValidQuantity = false;
   } else if (e.target.value.match(/^((100((\.|,)[0-9]{1,2})?)|([0-9]{1,2}((\.|,)[0-9]{0,2})?))$/)) {
    quantityError.classList.remove("errorMsg")
    quantityError.innerHTML =
      "";
     valueQuantity = e.target.value;
     isValidQuantity = true;
     console.log(isValidQuantity)
   } else {
    quantityError.classList.add("errorMsg")
     quantityError.innerHTML =
       "Le nombre doit être compris entre 0 et 100";
     valueQuantity = null;
     isValidQuantity = false;
   }
 });
 
 //------------------------------------------------------------//


// Cities checkbox

locationRadioadioButtons.forEach((btn) =>
  btn.addEventListener("change", () => {
    const checkedRadioButtons = document.querySelector(
      "input[name='location']:checked"
    );
    if (checkedRadioButtons !== null) {
      locationsError.classList.remove("errorMsg")
      locationsError.innerHTML = "";
      locationValue = checkedRadioButtons.value;
      isValidLocation = true;
    } else {
      locationsError.classList.add("errorMsg")
      locationsError.innerHTML = "cocher une case";
      locationValue = null;
      isValidLocation = false;
    }
  })
);

 //------------------------------------------------------------//

// Acceptation checkbox Regex and messages style

checkbox1.value = "true";
checkbox1.addEventListener("change", (e) => {
   if (checkbox1.checked == false) {
    checkbox1Error.classList.add("errorMsg")
    checkbox1Error.innerHTML = "cette case doit être cochée";
     checkbox1.value = "false";
   } else {
    checkbox1Error.classList.remove("errorMsg")
    checkbox1Error.innerHTML =
       "";
    checkbox1.value = "true";
   }
 });

 //------------------------------------------------------------//

// Function that will be launch on validation of the form

const validateForm = (e) => {
  e.preventDefault(); // Prevent reloading on submit

  // If form invalid, show error messages, thanks to our variables isValidFirst, Second, Mail...

  //first name
if(!isValidFirst){
    firstNameError.classList.add("errorMsg")
    firstNameError.innerHTML = "Le prénom doit comporter entre 3 et 25 caractères et ne pas contenir de caractère spécial";
  }

   //last name
if(!isValidSecond){
  lastNameError.classList.add("errorMsg")
  lastNameError.innerHTML = "Le nom doit comporter entre 3 et 25 caractères et ne pas contenir de caractère spécial";
}

   //email
   if(!isValidMail){
    emailError.classList.add("errorMsg")
    emailError.innerHTML = "un email doit être écrit avec un @ un . et des caractères (ex: gameon@gmail.com)"
    ;
  }
  
     //birthday
     if(!isValidBirthday){
      birthdateError.classList.add("errorMsg")
      birthdateError.innerHTML = "La date de naissance doit correspondre au format jj/mm/aaaa"
      ;
    }

    //quantity
    if(!isValidQuantity){
    quantityError.classList.add("errorMsg")
    quantityError.innerHTML = "Le nombre doit être compris entre 0 et 100"
    ;
  }
  
  // City choice

  if(!isValidLocation){
    locationsError.classList.add("errorMsg")
    locationsError.innerHTML = "cocher une case";
  }

  /* ------------------------------------------------- */

  // Form Validation by our variables IsValid...

if(!isValidFirst || !isValidSecond || !isValidMail || !isValidBirthday || !isValidQuantity || !isValidLocation || checkbox1.value == "false"){
  alert("formulaire invalide (pensez à remplir tous les champs sans erreurs, à cocher le lieu souhaité du tournoi et accepter les conditions d'utilisation")
} 
else {
  // Closing modal, display alert and refresh page when form validated

  closeModal()
  alert("formulaire validé !")
  window.location.reload();
  
}
};
/* ---------------------------------------------------------- */
submit.addEventListener("click", validateForm);