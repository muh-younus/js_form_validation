let errorName = document.getElementById("name-error");
let errorEmail = document.getElementById("email-error");
let errorPhone = document.getElementById("phone-error");
let errorMsg = document.getElementById("msg-error");
let submitError = document.getElementById("button-error");



function validateName(){

    let name = document.getElementById("name").value;

    if(name.length == 0){

        errorName.innerHTML = "Name is required!";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){

        errorName.innerHTML = "Write full name";
        return false;
    }
    errorName.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    return true;
}

// PHONE-VALIDATION

function validatePhone(){

    let phone = document.getElementById("phone").value;
   

    if(phone.length == 0){

        errorPhone.innerHTML = "phone is required";
        return false;
    }

    if(phone.length > 10){

        errorPhone.innerHTML = "Number is exceeded";
        return false;
    }

    if(phone.length !== 9){

        errorPhone.innerHTML = "<i class='fa-solid fa-circle-check'></i>"
    }

    if(!phone.match(/^[0-9]{10}$/)){

        errorPhone.innerHTML = "write full name";
    }
    errorName.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
}

// EMAIL-VALIDATION

function validateEmail(){

    let email = document.getElementById("email").value;
    console.log("email",email)

    if(email.length == 0){

        errorEmail.innerHTML = "Email required!";
        
    }

    // if(email.length !== 8){

    //     errorEmail.innerHTML = "The character of email must be 7";
    // }

    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        errorEmail.innerHTML = "Enter valid email";
    }

    errorEmail.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
}