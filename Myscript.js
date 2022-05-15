const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');
 
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type')=== 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

// To disable the form from submitting
const form = document.querySelector('#form');
// To display the error message
const errorDiv = document.querySelector('#show-error');
// To validate the username
const username = document.querySelector('#username');
// To validate the password
const firstPassword = document.querySelector('#id_password');
// To confirm the password
const secondPassword = document.querySelector('#id_repassword'); 

form.addEventListener('submit', (error) => {
  // All validation checks are run in this method.   
  // We will inlcude any and all errors in this string
let incorrectInput = '';

const firstLetter = username.value[0];

// Return true if first letter is uppercase
const firstLetterIsUpperCase = (firstLetter === firstLetter.toUpperCase()); 

if (!firstLetterIsUpperCase) {
    incorrectInput += ' The first letter of username must be uppercase.\n';
}

// Regex to see if a digit is in the username, returns true if there is
const usernameIncludesDigit = /\d/.test(username.value); 

if (!usernameIncludesDigit) {
    incorrectInput += 'Username must include at least one digit.\n';
}

const badPasswordLength = (firstPassword.value.length < 8 || firstPassword.value.length > 20);

if (badPasswordLength) {
    incorrectInput += ' The password should be within 8 to 20 characters.\n';
}

// Regex to see if a digit is in the username, returns true if there is
const passwordIncludesUppercase = /[a-z]/.test(firstPassword.value); 

if (!passwordIncludesUppercase) {
    incorrectInput += ' The password should contain at least one uppercase character.\n';
} 

if (firstPassword.value !== secondPassword.value) {
  incorrectInput += 'The passwords do not match.\n';
}

if (incorrectInput !== "") {
  // Change the error div tag to display the error message(s)
  errorDiv.innerText = incorrectInput; 
  // Change the color of the text to red
  errorDiv.style.color = 'red'; 
  // Prevent the form button from submitting again, before fixing the issues
  error.preventDefault(); 
}

});

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}