<?php

$last_name = $_POST['lastName'];
$first_name = $_POST['firstName'];
$mid_initial = $_POST['midName'];
$ResidentID = $_POST['residentID'];
$birthday = $_POST['bday'];
$username = $_POST['usernameInput'];
$password = $_POST['passInput']; 


	if ($password == $passwordRepeat ) {
		insertRecord($last_name,$first_name,$mid_initial,$ResidentID,$birthday,$username,$password);
	}

	else {
		echo '<script>
  				alert("Password Mismatch!");
					</script>';

		echo '<script>
				window.history.go(-1);
					</script>';
		}



function insertRecord($last_name,$first_name,$mid_initial,$ResidentID,$birthday,$username,$password) {
 try {
 require 'Dbase.php';
     
  $sql = "INSERT INTO dbase (lastName, firstName, middleInitial, ResidentID, Birthday, Mobile, Email, Username, Password) VALUES (?,?,?,?,?,?,?,?,?,?)";
  echo '<script>
				alert ("ERROR: Email/Username already used");
				</script>';
     
     
  // use exec() because no results are returned 
     $conn->prepare($sql)->execute([$last_name,$first_name,$mid_initial,$ResidentID,$birthday,$username,$password]);

  echo '<script>
  				alert("Congratulations, you are now registered!");
					</script>';
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
}

?>