<?php
require  "Ldbase.php";

if(isset($_POST['logup'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $con = config::connect();
    $query = "SELECT * FROM register Where username = :username AND password = :password ";
    $statement = $con->prepare($query);
    $statement -> execute(
        array(
            'username' => $_POST['username'], 
            'password' => $_POST['password']
        )
    );


    $count = $statement->rowcount();
    if ($count > 0 ){
        header('location: ../dashboard.html');
    } else {


        if ($username == "" and $password == "") {
            echo '<script>
                alert ("Input your Username and Passsword");
            </script>';
            echo '<script>
                window.history.go(-1);
            </script>';
            }

        else if ($username == "") {
            echo '<script>
                alert ("Input your Username ");
            </script>';
            echo '<script>
                 window.history.go(-1);
            </script>';

        }
        else if ($password == "") {
            echo '<script>
                alert ("Input your Passsword");
            </script>';
            echo '<script>
                 window.history.go(-1);
            </script>';
        }

        else {
            echo '<script>
                alert ("wrong username/password");
            </script>';
            echo '<script>
             window.history.go(-1);
        </script>';

        }

    }
}

?>