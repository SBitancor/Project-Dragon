<?php
	require "dbConn.php";
	
	if (isset($_POST['signSubmit'])){
		
		$resID 			= $_POST['residentID'];
		$birthDay 		= $_POST['bday'];
		$lName			= $_POST['lastName'];
		$fName 	 		= $_POST['firstName'];
		$middleName 	= $_POST['midName'];
		$barangayPos 	= $_POST['brgyPosition'];
		$username 		= $_POST['userInput'];
		$password 		= $_POST['inputPass'];
		$passwordRepeat = $_POST['rptPass'];
		
		
		if ($password == $passwordRepeat){//correct password; insertInput - values entered by the user
			insertInput($firstName, $lastName, $middleInitial, $studentNumber, $yearLevel, 
					$dateOfBirth, $mobileNumber, $ueEmail, $username, $password, $passwordRepeat);	
		}
		
		else if ($password !== $passwordRepeat){ //incorrect password
			echo '<script>
					alert("Warning: Password mismatch. Please try again.");
				</script>';
			echo '<script>
						window.history.go(-1);
					</script>';
		}
		
		else { //for unique username
			$uniqueUsername = "SELECT * FROM users WHERE userName=?";
		
			$query = $con->prepare($uniqueUsername);
			$query->bindParam(":userName",$username);
			$query-execute();
						
				if ($query-> rowCount() == 1){
					echo '<script>
							alert("Unique username!");
						  </script>';
				}
				else {
					echo '<script>
							alert("Warning: Username is already taken. Please try again.");
						 </script>';	
				}
		}
}//isset closing 
	
	function insertInput($resID, $birthDay, $lName, $fName, $middleName, 
					$barangayPos, $username, $password, $passwordRepeat){
	try {
		
		$con = config::connect();
		$userInput = "INSERT INTO users (firstName, lastName, middleInitial, studentNumber, yearLevel, birthDate, 
					 mobileNumber, emailAdd, userName, password) VALUES (?,?,?,?,?,?,?,?,?,?)"; 		
					 
		$query = $con->prepare($userInput);
		
		$query->bindParam(":firstName",$firstName);
		$query->bindParam(":lastName" ,$lastName);
		$query->bindParam(":middleInitial",$middleInitial);
		$query->bindParam(":studentNumber",$studentNumber);
		$query->bindParam(":yearLevel", $yearLevel);
		$query->bindParam(":birthDate",$dateOfBirth);
		$query->bindParam(":mobileNumber",$mobileNumber);
		$query->bindParam(":emailAdd",$ueEmail);
		$query->bindParam(":userName",$userName);
		$query->bindParam(":password",$password); 
		
		$query->execute(); 
		
			if ($query == true){
				echo '<script>
						alert ("Congratulations! You are already registered!");
					 </script>';
			}
			else {
				echo '<script>
						alert ("Sorry. Registration failed. Please try again.");
					 </script>'; 
			}
		
	}
	catch (PDOException $e){
			echo $userInput . $e->getMessage();	
		}
		$con = null;
	}

		
?>
