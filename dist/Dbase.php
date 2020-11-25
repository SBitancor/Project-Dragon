<?php

	class config {
		public static function connect (){
			$servername = "localhost";
			$dbusername = "root";
			$dbpassword = "";
			$dbname = "dragon";
			
			try {
				$conn =  new PDO ("mysql:host=$servername; dbname=$dbname", $dbusername, $dbpassword);
				$conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				}
			
			catch (PDOException $e) {
				echo "Connection Failed!! Please  Try Again." . $e-> getMessage();	
			}
			return $conn;
		}
	}
?>