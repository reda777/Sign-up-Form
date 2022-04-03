const passWord=document.querySelector("#password-input");
const passWordConfirm=document.querySelector("#password-confirm");
const passCError=document.querySelector("#password-confirm + .error");

passWordConfirm.addEventListener("input", checkPassword)
passWord.addEventListener("input", checkPassword)
/* checks if password input and confiramtion are equal*/
function checkPassword(){
    if(passWord.value != passWordConfirm.value){
        passWordConfirm.setCustomValidity("Invalid field.");
        passCError.textContent="Passwords don't match.";
    }
    else{
        passWordConfirm.setCustomValidity("");
        passCError.textContent=" ";
    }
}
