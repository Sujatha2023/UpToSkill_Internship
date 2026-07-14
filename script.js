const toggle = document.getElementById("togglePassword");
const password = document.getElementById("password");

toggle.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        toggle.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";

        toggle.innerHTML = '<i class="fa-solid fa-eye"></i>';

    }

});

const form = document.getElementById("loginForm");
const button = document.getElementById("loginBtn");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;
    const pwd = document.getElementById("password").value;

    if(username==="" || pwd===""){

        alert("Please fill all fields!");

        return;

    }

    button.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Logging in...';

    button.disabled=true;

    setTimeout(()=>{

        button.innerHTML="✔ Login Successful";

        button.style.background="#16a34a";

    },2000);

});