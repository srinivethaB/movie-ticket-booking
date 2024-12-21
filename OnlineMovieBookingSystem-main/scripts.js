
function myfunc(){
    var username=document.getElementById('username').value;
var password=document.getElementById('password').value;
var cpassword=document.getElementById('cpassword').value;
    if(username==="username" && password=="password" && cpassword=="password"){
        window.location.replace("contact.html");
    }
    else{
        alert("Username or passwrod incorrect")
    }
}
