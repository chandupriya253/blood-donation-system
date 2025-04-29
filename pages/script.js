let registerFormELement = document.getElementById("registerForm");
let nameInput = document.getElementById("name");
let submit = document.getElementById("submit");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let locationInput = document.getElementById("location");
let bloodGroupSelect = document.getElementById("bloodGroup")
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let bloodGroupError = document.getElementById("bloodGroupError");
let locationError = document.getElementById("locationError");
let isValid = true;


function validatePassword(password) {
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;
    return passwordPattern.test(password);
}

function submitForm(){
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required!";
        isValid = false; 
 
    } else {
        nameError.textContent = ""; 
    }
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required!"; 
        isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Invalid email format! Use a valid email like example@domain.com"; 
        isValid = false;
    } else {
        emailError.textContent = ""; 
    }
   
    
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required!";
        isValid = false; 
 
    } else if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = "Password must be at least 8 characters, with 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
        isValid = false;
    } else {
        passwordError.textContent = ""; 
    }
    if(bloodGroupSelect.value === "Blood Group"){
        bloodGroupError.textContent = "BloodGroup is required";
        isValid = false;
    }else{
        bloodGroupError.textContent = "";
    }
    if (locationInput.value.trim() === "") {
        locationError.textContent = "Location is required!";
        isValid = false; 
    } else {
        locationError.textContent = ""; 
    }
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("registerForm").submit();
    }
        
   
}