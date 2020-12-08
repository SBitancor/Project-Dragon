<?php
	require "Dbase.php";
		if(isset($_POST['loginbtn'])){
			$username = $_POST['inputUsername'];
			$password = $_POST['inputPassword'];
			$con = config::connect();
			$query = "SELECT * FROM register WHERE Username = :username AND Pass = :password";
			$statement = $con->prepare($query);
			$statement->execute(
				array(
				'username' => $_POST['inputUsername'],
				'password' => $_POST['inputPassword']
				)
		);

		$count = $statement->rowCount();

		if ($count > 0){
		header('location: ../dashboard.html');
		} 
	
		else {
		echo '<script>
				alert("Invalid Username/Password. Please Try Again.");
			</script>';

		echo '<script>
				window.history.go(-1);
			</script>';
		}
	}
?>