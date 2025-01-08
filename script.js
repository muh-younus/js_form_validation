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
    errorName.innerHTML = "valid";
    return true;
}