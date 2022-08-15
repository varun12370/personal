var password = "varun"

function passcheck() {

if(document.getElementById('pass1').value !=password) {
alert('Wrong password, Try Again.');
return false;
}

if(document.getElementById('pass1').value ==password) {
alert('Correct Password. Click OK to enter my personal webpage.');
}
}
window.oncontextmenu = function (){
    console.log("Right Click Disabled");
    return false;
}
