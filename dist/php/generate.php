<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dragon";
$conn = mysqli_connect($servername, $username, $password, $dbname);

?>

<?php

$query = "select * from register order by ResidentID desc limit 1";
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_array($result);
$lastid = $row['ResidentID'];

if($lastid == " ")

{
    $empid = "Citizen1";

}
else
{

    $empid = substr($lastid, 3);
    $empid = intval($empid);
    $empid = "Citizen" . ($empid + 1);
}


?>

<?php

if ($_SERVER["REQUEST_METHOD"]== "POST") 
{
    $residentID = $_POST['residentID'];
    $bday = $_POST['bday'];
    $lastName = $_POST['lastName'];
    $firstName = $_POST['firstName'];
    $midName = $_POST['midName'];
    $userInput = $_POST['userInput'];
    $inputPass = $_POST['inputPass'];


if (!$conn)
 {
    die("connection failed " . mysqli_connect_error());
}
else
{
    $sql = "insert into register(ResidentID,Bday,LastName,FirstName,MidName,Username,Pass)VALUES('$residentID' , '$bday' , '$lastName' , '$firstName' , '$midName' , '$userInput' , '$inputPass')";

        if(mysqli_query($conn,$sql)) 
    {
        echo "RECORD ADDED!";
    }
    else
    {
        echo "RECORD FAILED!";
    
}


}
}


?>