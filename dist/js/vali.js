function myFunction(){
	var rID = document.getElementById('residentID').value;
	
    alert('line4');

	if (rID.length !=10) {
		setErrorFor(residentID,'What the fuck is going on');
    	alert('Error: Resident ID. Must be 10 digits');
    	return false;
    }
    else{
        setSuccessFor(residentID);
    
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
