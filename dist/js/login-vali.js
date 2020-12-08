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
	var usernameValue = document.getElementById("inputUsername").value;
    var passwordValue = document.getElementById("inputPassword").value;
	
	//Username
    if (usernameValue == ""){
		setErrorFor("inputUsername", 'username-tooltip', 'Username cannot be blank');
        return false;
    } else {
		setSuccessFor("inputUsername", "username-tooltip");
    }
	
	//Password
	if (passwordValue == ""){
		setErrorFor("inputPassword", 'password-tooltip', 'Password cannot be blank');
        return false;
    } else {
		setSuccessFor("inputPassword", "password-tooltip");
    }
	
}