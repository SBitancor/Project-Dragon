function setErrorFor(input, tooltip, message){
	document.getElementById(input).className = "form-control py-4 is-invalid";
	var fieldNameElement = document.getElementById(tooltip);
	fieldNameElement.innerHTML = message;
	document.getElementById(tooltip).style.display = "block";
}

function setSuccessFor(input, tooltip){
    document.getElementById(input).className = "form-control py-4 is-valid";
	document.getElementById(tooltip).style.display = "none";
}

function validateAll(){
    if (main){
        document.form.submit();
    }
}

function main(){
	
	//RegExp
	var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var mobile = /[+]63/g;
    var email = /^\S+@\S+\.\S+$/;
    var usernameReg = /([A-Z-_])/gi;
    var alphaNum = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;
	
	var residentIDValue = document.getElementById("residentID").value;
	var positionValue = document.getElementById("position").value;
	var usernameValue = document.getElementById("username").value;
	var passwordValue = document.getElementById("password").value;
	var repeatPasswordValue = document.getElementById("repeatPassword").value;
	
	//Resident ID
	if (residentIDValue == ""){
		setErrorFor("residentID", "residentID-tooltip", "Resident ID cannot be blank");
		return false;
	} else {
		setSuccessFor("residentID", 'residentID-tooltip');
		if (numbers.test(residentIDValue)){
			setSuccessFor("residentID", 'residentID-tooltip');
			
		} else {
			setErrorFor("residentID", 'residentID-tooltip', 'Numbers only');
			return false;
		}
	}
	
	//Position
	if (positionValue == "0"){
		document.getElementById('position').className = "custom-select is-invalid";
		document.getElementById("position-tooltip").style.display = "block";
		return false;
	} else {
		document.getElementById("position-tooltip").style.display = "none";
		document.getElementById('position').className = "custom-select is-valid";
	}
	
	//Username
	if (usernameValue == ""){
		setErrorFor("username", 'username-tooltip', 'Username cannot be blank');
		return false;
	} else {
		if (alphaNum.test(usernameValue)){
			if(usernameValue.length > 7 && usernameValue.length < 19){
				setSuccessFor("username", "username-tooltip");
			} else {
				setErrorFor("username", 'username-tooltip', 'Username must be 8-18 characters');
				return false;
			}
		} else {
			setErrorFor("username", 'username-tooltip', 'Username must be alphanumeric');
			return false;
		}
	}
	
	//Password
	if (passwordValue == ""){
		setErrorFor("password", 'password-tooltip', 'Password cannot be blank');
		return false;
	} else {
		if (alphaNum.test(passwordValue)){
			if(passwordValue.length > 7 && passwordValue.length < 21){
				setSuccessFor("password", "password-tooltip");
			} else {
				setErrorFor("password", 'password-tooltip', 'Password must be 8-20 characters');
				return false;
			}
		} else {
			setErrorFor("password", 'password-tooltip', 'Password must be alphanumeric');
			return false;
		}
	}
	
	if (passwordValue == repeatPasswordValue){
		setSuccessFor("repeatPassword", "repeatPassword-tooltip");
	} else {
		setErrorFor("repeatPassword", 'repeatPassword-tooltip', 'Password mismatch');
		return false;
	}
}

//MODAL: data-dismiss="modal" data-toggle="modal"