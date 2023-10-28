// console.log('Bangladesh')

document.getElementById("submit-btn").addEventListener('click' , function(){
    // console.log("Submit button is clicked")
    const EmailField = document.getElementById("user-email");
    const Email = EmailField.value;
    // console.log(Email)
    const PasswordField = document.getElementById("user-password");
    const Password = PasswordField.value;
    // console.log(Password)
    if(Email == "khan@gmail.com" && Password =="iloveTk"){
        window.location.href = "bank.html"

    }else{
        alert("Password & Email is Invalid")
    }
})