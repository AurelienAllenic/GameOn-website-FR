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
const radios = document.querySelectorAll('input[type="radio"]');
const locationRadioadioButtons = document.querySelectorAll(
  "input[name='location']"
);

const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
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
const checkbox2Error = document.getElementById("checkbox2ErrorMsg");

// Submit button //

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

// Handling firstName Errors

firstName.addEventListener("input", (e) => {
  if (e.target.value.length == 0) {
    firstNameError.innerHTML = "";
    valueFirstName = null;
    isValidFirst = false;
    console.log(valueFirstName);
  } else if (e.target.value.length < 3 || e.target.value.length > 25) {
    firstNameError.classList.add("errorMsg")
    firstNameError.innerHTML =
      "Le prénom doit comporter entre 3 et 25 caractères";
    valueFirstName = null;
    isValidFirst = false;
  }
  if (e.target.value.match(/^[a-z A-Z]{3,25}$/)) {
    firstNameError.classList.add("goodMsg")
    firstNameError.innerHTML = "Le prénom doit comporter entre 3 et 25 caractères";
    valueFirstName = e.target.value;
    isValidFirst = true;
  }
  if (
    !e.target.value.match(/^[a-z A-Z]{3,25}$/) &&
    e.target.value.length > 3 &&
    e.target.value.length < 25
  ) {
    firstNameError.classList.remove("goodMsg")
    firstNameError.classList.add("errorMsg")
    firstNameError.innerHTML =
      "le prénom ne doit pas contenir de caractère spécial (accent, chiffre)";
    console.log("caractère spécial");
    isValidFirst = false;
  }
});

//------------------------------------------------------------//

// Gestion du lastName

lastName.addEventListener("input", (e) => {
  if (e.target.value.length == 0) {
    lastNameError.innerHTML = "";
    valueFirstName = null;
    isValidSecond = false;
  } else if (e.target.value.length < 3 || e.target.value.length > 25) {
    lastNameError.classList.add("errorMsg")
    lastNameError.innerHTML = "Le nom doit comporter entre 3 et 25 caractères";
    valueFirstName = null;
    isValidSecond = false;
  }
  if (e.target.value.match(/^[a-z A-Z]{3,25}$/)) {
    lastNameError.classList.add("goodMsg")
    lastNameError.innerHTML = "Le nom doit comporter entre 3 et 25 caractères";
    valueLastName = e.target.value;
    isValidSecond = true;
  }
  if (
    !e.target.value.match(/^[a-z A-Z]{3,25}$/) &&
    e.target.value.length > 3 &&
    e.target.value.length < 25
  ) {
    lastNameError.classList.remove("goodMsg")
    lastNameError.classList.add("errorMsg")
    lastNameError.innerHTML =
      "le nom ne doit pas contenir de caractère spécial (accent, chiffre)";
    console.log("caractère spécial");
    isValidSecond = false;
  }
});

//------------------------------------------------------------//

// Gestion du mail

email.addEventListener("input", (e) => {
  if (e.target.value.length == 0) {
    emailError.innerHTML = "";
    valueEmail = null;
    isValidMail = false;
  } else if (e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    emailError.classList.add("goodMsg")
    emailError.innerHTML = "un email doit être écrit avec un @ un . et des caractères (ex: gameon@gmail.com)";
    valueEmail = e.target.value;
    isValidMail = true;
  }
  if (
    !e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) &&
    !e.target.value == 0
  ) {
    emailError.classList.remove("goodMsg")
    emailError.classList.add("errorMsg")
    emailError.innerHTML =
      "un email doit être écrit avec un @ un . et des caractères (ex: gameon@gmail.com)";
    valueEmail = null;
    isValidMail = false;
  }
});

//------------------------------------------------------------//

// Gestion du birthdate

birthdate.addEventListener("input", (e) => {
 console.log(e.target.value);
  if (e.target.value.length == 0) {
    birthdateError.innerHTML = "";
    valueBirthdate = null;
    isValidBirthday = false;
  } else if (e.target.value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
    birthdateError.classList.add("goodMsg")
    birthdateError.innerHTML = "La date de naissance doit correspondre au format jj/mm/aaaa";
    valueBirthdate = e.target.value;
    isValidBirthday = true;
  } else {
    birthdateError.classList.remove("goodMsg")
    birthdateError.classList.add("errorMsg")
    birthdateError.innerHTML =
      "La date de naissance doit correspondre au format jj/mm/aaaa";
    valueBirthdate = null;
    isValidBirthday = false;
  }
});

//------------------------------------------------------------//


// Gestion de la quantity

quantity.addEventListener("input", (e) => {
  console.log(e.target.value);
   if (e.target.value.length == 0) {
     quantityError.innerHTML = "";
     valueQuantity = null;
     isValidQuantity = false;
   } else if (e.target.value.match(/^((100((\.|,)[0-9]{1,2})?)|([0-9]{1,2}((\.|,)[0-9]{0,2})?))$/)) {
    quantityError.classList.add("goodMsg")
    quantityError.innerHTML =
      "Le nombre doit être compris entre 0 et 100";
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


// Gestion du cities checkbox
locationValue="";
locationRadioadioButtons.forEach((btn) =>

  btn.addEventListener("change", () => {
    const checkedRadioButtons = document.querySelector(
      "input[name='location']:checked"
    );

    if (checkedRadioButtons !== null) {
      locationsError.classList.add("goodMsg")
      locationsError.innerHTML = "cocher au moins une case";
      locationValue = checkedRadioButtons.value;
      isValidLocation = true;
    } else {
      locationsError.classList.remove("goodMsg")
      locationsError.classList.add("errorMsg")
      locationsError.innerHTML = "cocher au moins une case";
      locationValue = "";
      isValidLocation = false;
    }
  })
);

 //------------------------------------------------------------//

/* Gestion du lu et accepté */

checkbox1.value = "true";
checkbox1.addEventListener("change", (e) => {
  
   if (checkbox1.checked == false) {
    checkbox1Error.classList.remove("goodMsg")
    checkbox1Error.classList.add("errorMsg")
    checkbox1Error.innerHTML = "cette case doit être cochée";
     checkbox1.value = "false";
   } else {
    checkbox1Error.classList.remove("errorMsg")
    checkbox1Error.classList.add("goodMsg")
    checkbox1Error.innerHTML =
       "cette case doit être cochée";
       checkbox1.value = "true";
   }
 });

 //------------------------------------------------------------//
// objet contact

let users = [];
const addUser = (e) => {
  e.preventDefault(); // Empêcher le rechargement de la page lors du clic

  // Montrer les erreurs à l'utilisateur si form incorrect

  //first name
if(isValidFirst == false){
    firstNameError.classList.add("errorMsg")
    firstNameError.innerHTML = "Le prénom doit comporter entre 3 et 25 caractères et ne pas contenir de caractère spécial";
  }

   //last name
if(isValidSecond == false){
  lastNameError.classList.add("errorMsg")
  lastNameError.innerHTML = "Le nom doit comporter entre 3 et 25 caractères et ne pas contenir de caractère spécial";
}

   //email
   if(isValidMail == false){
    emailError.classList.add("errorMsg")
    emailError.innerHTML = "un email doit être écrit avec un @ un . et des caractères (ex: gameon@gmail.com)"
    ;
  }
  
     //birthday
     if(isValidBirthday == false){
      birthdateError.classList.add("errorMsg")
      birthdateError.innerHTML = "La date de naissance doit correspondre au format jj/mm/aaaa"
      ;
    }

    //quantity
    if(isValidQuantity == false){
    quantityError.classList.add("errorMsg")
    quantityError.innerHTML = "Le nombre doit être compris entre 0 et 100"
    ;
  }
  
  //Choix de la ville

  if(isValidLocation == false){
    locationsError.classList.add("errorMsg")
    locationsError.innerHTML = "cocher au moins une case";
  }

  let user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    birthdate: birthdate.value,
    quantity: quantity.value,
    location: locationValue,
    isAccepted: checkbox1.value,
  };
  console.log(user)
  /*document.querySelectorAll(".formData  ")[0].reset(); // Pour reset le form
  //Vérification de la prise en compte de la création de l'objet*/

if(isValidFirst == false || isValidSecond == false || isValidMail == false || isValidBirthday == false || isValidQuantity == false || isValidLocation == false || checkbox1.value == "false"){
  alert("formulaire invalide (pensez à remplir tous les champs sans erreurs, à cocher le lieu souhaité du tournoi et accepter les conditions d'utilisation")
} 
else {
  closeModal()
  alert("formulaire validé !")
}
};

submit.addEventListener("click", addUser);