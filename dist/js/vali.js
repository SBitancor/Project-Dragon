function myFunction(){
	var rID = document.getElementById('residentID').value;
	var bDay = document.getElementById('bday').value;
	var lNam = document.getElementById('lastName').value;
	var fNam = document.getElementById('firstName').value;
	var mNam = document.getElementById('midName').value;
	var brgyPos = document.getElementById('brgyPosition').value;
	var uInp = document.getElementById('userInput').value;
	var inPass = document.getElementById('inputPass').value;
	var repPass = document.getElementById('rptPass').value;
	var numbers = /^[0-9]+$/;
	var lettersSpace = /^[A-Za-z\s]*$/;


	if (rID.length !=10) {
		rID.style.backgroundColor = "red";
    	alert('Error: Resident ID. Must be 10 digits');
    	return false;
    }
    else{
    	rID.style.backgroundColor = "green";
    }
    if (!rID.match(numbers)) {
    	rID.style.backgroundColor = "red";
    	alert('Error: Resident ID. Only numbers are allowed')
    	return false;
    }
    else{
    	rID.style.backgroundColor = "green";
    }
    if (!lNam.match(lettersSpace)) {
    	lNam.style.backgroundColor = "red";
    	alert('Error: Last name. Only alphabets are allowed');
    	return false;
    }
    else{
    	lNam.style.backgroundColor = "green";
    }
    if (!fNam.match(lettersSpace)) {
    	fNam.style.backgroundColor = "red";
    	alert('Error: First name. Only alphabets are allowed');
    	return false;
    }
    else{
    	fNam.style.backgroundColor = "green";
    }
	if (inPass != repPass){
		inPass.style.backgroundColor = "red";
		repPass.style.backgroundColor = "red";
    	alert('Error. Password mismatch');
    	return false;
    }
    else{
    	inPass.style.backgroundColor = "green";
    	repPass.style.backgroundColor = "green";
    }
}