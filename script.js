const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const form = document.querySelector('#signup');

const checkUsername = () => {

  let valid = false;

  const min = 3,
      max = 25;

  const username = usernameEl.value.trim();

  if (!isRequired(username)) {
      showError(usernameEl, 'Name cannot be blank.');
  } 
  else {
      showSuccess(usernameEl);
      valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
      showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
      showError(emailEl, 'Email is not valid.')
  } else {
      showSuccess(emailEl);
      valid = true;
  }
  return valid;
};



const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isRequired = value => value === '' ? false : true;
// const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}

form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate fields
  let isUsernameValid = checkUsername(),
      isEmailValid = checkEmail()
      

  let isFormValid = isUsernameValid &&
      isEmailValid 

  // submit to the server if the form is valid
  if (isFormValid) {

  }
});


function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("age").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 110) {
    text = "Enter valid age!";
  } else {
    text=""
  }
  document.getElementById("demo").innerHTML = text;

  

    var Number = document.getElementById("mob").value;
    var IndNum = /^\+(91)([0-9]{10})$/;
    let mtext;
    if(IndNum.test(Number)){
      //  return;
       mtext="";
   }

   else{
       mtext="Enter indian mobile number"

   }
   document.getElementById("mob-text").innerHTML = mtext;


}
