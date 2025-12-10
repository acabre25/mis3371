 /*
Name:Ashley Cabrera
Date last edited: 1
Date created:
version:1 
Description Homework 1 JS 
*/

//dynamic date js code 
const d= new Date () ;
let text= d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

// name slider js code 
let slider = document.getElementById("ranger");
let output = document.getElementById("ranger-slider");
output.innerHTML= slider.value;
slider .oninput = function (){
    output.innerHTML = this.value;
};

function validatedob() {
    dob=document.getElementById("dob");
    let date= new Date (dob.value);
    let maxDate= new Date().setFullYear(new Date().getFullYear()-120);

    if(date> new Date()) {
        document.getElementById("dob-error").innerHTML =
        "Date cant be in the future";
        dob.value="";return false;
    } else if (date< new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML=
        "Date cant be more than 120 years ago"; dob.value="";
        return false;
    } else {
        d.ocument.getElementById("dob-error").innerHTML =""; return true;
    }
}

function validateSSN() {
    const ssn =document.getElementById("ssn").value;
    const ssnR= /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
    if(!ssnR.test(ssn)){
        document.getElementById("ssn-error").innerHTML=
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML =""; return true;

    }
}

function validateZcode(){
    const ZipInput = document.getElementById("Zip");
    let Zip = ZipInputipInput.value.replace(/[^\d-]/g,"");

    if (!Zip) {
        document.getElementById("Zip-error").innerHTML =
        "Zip code cant be blank" ;
        return false;

    }

    if (Zip.lenght>5){
        Zip = Zip.slice(0,5) + "-" + Zip.slice(5,9);
    } else {
        Zip = Zip.slice(0,5);
    }

    ZipInput.value = Zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

function validateemail(){

    const emailInput = document.getElementById("email");
    var emailR= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email) {
        document.getElementById("email-error").innerHTML =
        "email cant be blank" ;
        return false;
    }
if(!emailR.test(email)){
        document.getElementById("email-error").innerHTML=
        "Please enter a valid email";
        return false;
    } else {
        document.getElementById("email-error").innerHTML =""; return true


}
}
function validatephone() {
    const phone =document.getElementById("phone").value;
    const phoneR= /^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/;
    if(!phoneR.test(ssn)){
        document.getElementById("phone-error").innerHTML=
        "Please enter a valid phone number";
        return false;
    } else {
        document.getElementById("phone-error").innerHTML =""; return true;

    }
}

function validateUid() {
    uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;
    let uid = text.toLowerCase();

    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}


function validatePword() {
let errorMessage=[];
let pword = document.getElementById("pword").value;
let uid = document.getElementsById("uid").value;

if (pword.lenght< 8) errorMessage.push("Password must be at least 8 characters");
if (pword==uid) errorMessage.push ("Password cannot be exactly the same as your user ID");
if (pword.includes(uid)) errorMessage.push("Password cannot contain your user ID");
if (!pword.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
if (!pword.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
if (!pword.match(/[0-9]/)) errorMessage.push("Enter at least one number");
if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character");
if (pword.includes(uid)) errorMessage.push("Password can't contain user ID");
}

function confirmPword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("con_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords match";
        return true;
    }
}

function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}
