const confirmedPasswordInput = document.querySelector('input[name="confirm_password"]');
const passwordInput = document.querySelector('input[name="password"]');
const emailInput = document.querySelector('input[name="email"]');
const divPassStrength = document.querySelector(".div-pass-strength");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");

function arePasswordSame(password,confirmedPassword){
    return password === confirmedPassword;
}

function markValidation(element, condition){
    !condition ? element.classList.add('no-valid') : element.classList.remove('no-valid');
}

function validatePassword() {
    if(passwordInput.value != ''){
        setTimeout(function (){
            const condition = arePasswordSame(
                passwordInput.value,
                confirmedPasswordInput.value
                
            );
            markValidation(confirmedPasswordInput,condition);
        },
        1000
        )    
    }else{
        confirmedPasswordInput.classList.remove('no-valid');
    }
    
}

function isEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function emailValidation() {
    if(emailInput.value != ''){
       setTimeout(function () {
            markValidation(emailInput, isEmail(emailInput.value));
            },
            1000
        ); 
    }else{
        emailInput.classList.remove('no-valid');
    }
    
}

function isStrengthEnough(pass) {
    var score = 0;
    var options = {
        numbers: /\d/.test(pass),
        uppercase: /[a-z]/.test(pass),
        lowercase: /[A-Z]/.test(pass),
        special: /\W/.test(pass),
        length: pass.length > 7
    };

    for(var op in options)
        if (options[op] === true) score += 100 / 5;
    
    if(score < 50) {
        weak.classList.add("active");
        text.textContent = "Your password is too weak";
    }

    if(score > 50 && score < 100) {
        medium.classList.add("active");
        text.textContent = "Your password is medium";
    }else{
        medium.classList.remove("active");
    }

    if(score == 100) {
        medium.classList.add("active");
        strong.classList.add("active");
        text.textContent = "Your password is strong";
    }else{
        strong.classList.remove("active");
    }
}

function showPasswordOrHide () {
    (passwordInput.type === "password") ? passwordInput.type="text" : passwordInput.type="password";
}

function passwordStrength() {
    if(passwordInput.value != ''){
        divPassStrength.style.display = 'flex';
        showBtn.style.display ='block';
        showBtn.addEventListener('click',showPasswordOrHide);
        setTimeout(function () {
        isStrengthEnough(passwordInput.value);
            },
            1000
        );
    }else{
        divPassStrength.style.display = 'none';
        showBtn.style.display ='none';
    }
    
}

confirmedPasswordInput.addEventListener('keyup', validatePassword);
emailInput.addEventListener('keyup', emailValidation);
passwordInput.addEventListener('keyup', passwordStrength);