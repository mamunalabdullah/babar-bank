// submit button event handle
document.getElementById("login-submit").addEventListener("click", function(){
    // for email 
    const email = document.getElementById("email");
    const userMail = email.value;

    // for password 
    const password = document.getElementById("password");
    const userPass = password.value;

    // condition
    if (userMail == "abdullahmamun1597@gmail.com" && userPass == 12345) {
        window.location.href = "banking.html";
    } else {
        console.log("Invalid Email or Password");
    } 
})

