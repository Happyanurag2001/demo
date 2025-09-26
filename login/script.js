// Form validation code---------->
// login page
let Uname = document.querySelector('#username');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');
let form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    document.querySelector("#emailError").style.display = "";
    document.querySelector("#passwordError").style.display = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^])[A-Za-z\d@$!%*?#&^]{8,}$/;
    let emailAns = emailRegex.test(Uname.value);
    let passwordAns = passwordRegex.test(password.value);

    let isValid = true;
    if(!emailAns){
        document.querySelector("#emailError").textContent = "Please provide a valid email";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }

    if(!passwordAns){
        document.querySelector("#passwordError").textContent = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;

    }

    if(isValid){
        let errorMessages = document.getElementById('errorMessages');
        document.querySelector(".error").style.display = "initial";
        form.submit();
    }


    console.log('form submitted');
});

