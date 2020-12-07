function myFunction(){
    var letters = /^[A-Za-z]*$/;
    var lettersSpace = /^[A-Za-z\s]*$/;
    var numbers = /^[0-9]+$/;
    var letterNumber = /^[0-9a-zA-Z]+$/;
    var mailformat = /^[a-z0-9.]+[@ue.edu.ph]*$/;
    var unameformat = /^[a-zA-Z-_]*$/;
    var mnlen = 1;
    var mxlen = 2;
    var alphaNum = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;
    
	var rID = document.getElementById('residentID').value;
	document.getElementById("invalid1").style.display = "block";
    document.getElementById("invalid2").style.display = "block";

    alert('line4');

	if (rID.length !=10) {
		return false;
    }
    else{
        
    
}
}
function setErrorFor(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
}
