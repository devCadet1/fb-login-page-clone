

function login() {

    let userEmail = document.getElementById('email').value;
let userPass = document.getElementById('pass').value;
    if (userEmail === "satyam" & userPass === "harry") {
        text = "Login Successful"  

    } 
    
    else {
        text = "Invalid details"
    }
    
    // document.getElementById('textRes').innerHTML = text;
    alert (text)
}


