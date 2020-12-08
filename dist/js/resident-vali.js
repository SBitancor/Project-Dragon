function setErrorFor(input, tooltip, message){
	document.getElementById(input).className = "form-control is-invalid";
	var fieldNameElement = document.getElementById(tooltip);
	fieldNameElement.innerHTML = message;
	document.getElementById(tooltip).style.display = "block";
}

function setSuccessFor(input, tooltip){
    document.getElementById(input).className = "form-control is-valid";
	document.getElementById(tooltip).style.display = "none";
}

function validateAll(){
    if (main){
        document.form.submit();
    }
}

function main(){
	var lastNameValue = document.getElementById("lastName").value;
    var birthDateValue = document.getElementById("birthDate").value;
	var firstNameValue = document.getElementById("firstName").value;
	var civilStatusValue = document.getElementById("civilStatus").value;
	var middleNameValue = document.getElementById("middleName").value;
	var genderValue = document.getElementById("gender").value;
	var aliasValue = document.getElementById("alias").value;
	var voterStatusValue = document.getElementById("voterStatus").value;
	var mobileNumberValue = document.getElementById("mobileNumber").value;
	var emailAddressValue = document.getElementById("emailAddress").value;
	var purokValue = document.getElementById("purok").value;
	var birthPlaceValue = document.getElementById("birthPlace").value;
	
	//RegExp
	var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var mobile = /[+]63/g;
    var email = /^\S+@\S+\.\S+$/;
    var usernameReg = /([A-Z-_])/gi;
    var alphaNum = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;
	
	//Last Name
    if (lastNameValue == ""){
		setErrorFor("lastName", 'lastName-tooltip', 'Last Name cannot be blank');
        return false;
    } else {
		if (letters.test(lastNameValue)){
			setSuccessFor("lastName", 'lastName-tooltip');
		} else {
			setErrorFor("lastName", 'lastName-tooltip', 'Alphabets only');
			return false;
		}
	}
	
	//Birth Date
    if (birthDateValue == ""){
        setErrorFor("birthDate", "birthDate-tooltip", 'Birth date cannot be blank');
        return false;
    } else {
        setSuccessFor("birthDate", "birthDate-tooltip");
    }
	
	//First Name
    if (firstNameValue == ""){
		setErrorFor("firstName", 'firstName-tooltip', 'First Name cannot be blank');
        return false;
    } else {
		if (letters.test(firstNameValue)){
			setSuccessFor("firstName", 'firstName-tooltip');
		} else {
			setErrorFor("firstName", 'firstName-tooltip', 'Alphabets only');
			return false;
		}
	}
	
	//Civil Status
	if (civilStatusValue == "0"){
		document.getElementById('civilStatus').className = "custom-select is-invalid";
		document.getElementById("civilStatus-tooltip").style.display = "block";
		return false;
	} else {
		document.getElementById("civilStatus-tooltip").style.display = "none";
		document.getElementById('civilStatus').className = "custom-select is-valid";
	}
	
	//Middle Name (No Validation)
	if (middleNameValue == ""){
		setSuccessFor("middleName", 'middleName-tooltip');
		document.getElementById("middleName").placeholder = "None";
	} else {
		if (letters.test(middleNameValue)){
			setSuccessFor("middleName", 'middleName-tooltip');
		} else {
			setErrorFor("middleName", 'middleName-tooltip', 'Alphabets only');
		return false;
		}
	}
	
	//Gender
	if (genderValue == "0"){
		document.getElementById('gender').className = "custom-select is-invalid";
		document.getElementById("gender-tooltip").style.display = "block";
		return false;
	} else {
		document.getElementById("gender-tooltip").style.display = "none";
		document.getElementById('gender').className = "custom-select is-valid";
	}
	
	//Alias
    if (aliasValue == ""){
		setErrorFor("alias", 'alias-tooltip', 'Alias cannot be blank');
        return false;
    } else {
		if (letters.test(aliasValue)){
			setSuccessFor("alias", 'alias-tooltip');
		} else {
			setErrorFor("alias", 'alias-tooltip', 'Alphabets only');
			return false;
		}
	}
	
	//Voter Status
	if (voterStatusValue == "0"){
		document.getElementById('voterStatus').className = "custom-select is-invalid";
		document.getElementById("voterStatus-tooltip").style.display = "block";
		return false;
	} else {
		document.getElementById("voterStatus-tooltip").style.display = "none";
		document.getElementById('voterStatus').className = "custom-select is-valid";
	}
	
	//Mobile Number
	if (mobileNumberValue == ""){
		setErrorFor("mobileNumber", 'mobileNumber-tooltip', 'Mobile Number cannot be blank');
        return false;
	} else {
		if (numbers.test(mobileNumberValue)){
			if (mobileNumberValue.length == 11){
				setSuccessFor("mobileNumber", 'mobileNumber-tooltip');
			} else {
				setErrorFor("mobileNumber", 'mobileNumber-tooltip', 'Please enter mobile number in 11-digit format');
				return false;
			}
		} else {
			setErrorFor("mobileNumber", 'mobileNumber-tooltip', 'Numbers only');
			return false;
		}
	}
	
	
	//Email Address
	if (emailAddressValue == ""){
		setErrorFor("emailAddress", 'emailAddress-tooltip', 'Email Address cannot be blank');
		return false;
	} else {
		if (email.test(emailAddressValue)){
			setSuccessFor("emailAddress", 'emailAddress-tooltip');
		} else {
			setErrorFor("emailAddress", 'emailAddress-tooltip', 'Please provide valid email address');
			return false;
		}
	}
	
	//Purok
	if (purokValue == "0"){
		document.getElementById('purok').className = "custom-select is-invalid";
		document.getElementById("purok-tooltip").style.display = "block";
		return false;
	} else {
		document.getElementById("purok-tooltip").style.display = "none";
		document.getElementById('purok').className = "custom-select is-valid";
	}
	
	//birthPlace
	if (birthPlaceValue == ""){
		setErrorFor("birthPlace", 'birthPlace-tooltip', 'Birth place cannot be blank');
		return false;
	} else {
		if (birthPlaceValue.length <= 5){
			setErrorFor("birthPlace", 'birthPlace-tooltip', 'Please provide complete address');
			return false;
		} else {
			setSuccessFor("birthPlace", 'birthPlace-tooltip');
		}
	}
	
}

//MODAL: data-dismiss="modal" data-toggle="modal"