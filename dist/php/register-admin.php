<!DOCTYPE html>
<?php
// Start the session
session_start();
?>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Page Title - SB Admin</title>
        <link href="css/styles.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>
        <script src="js/vali.js"></script>
    </head>
    <body class="bg-primary">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Create Admin Account</h3></div>
                                    <div class="card-body">
                                        <form id = "registerForm" class = "userinput" action = "php/generate.php" method = "POST">
											<div class="form-row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="residentID">Resident ID</label>
                                                        <input class="form-control py-4"
                                                        id="residentID"
                                                        name="residentID"
                                                        type="text"
                                                        value="<?php echo $empid; ?>" 
                                                        placeholder="Enter Resident ID" readonly/>
                                                    
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="bday">Birthday</label>
                                                        <input class="form-control py-4" 
                                                        id="bday" 
                                                        name="bday" 
                                                        type="text" 
                                                        placeholder="Enter Birthday" />
                                                    </div>
                                                </div>
                                            </div>
											<div class="form-row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="lastName">Last Name</label>
                                                        <input class="form-control py-4" 
                                                        id="lastName" 
                                                        name="lastName" 
                                                        type="text" 
                                                        placeholder="Enter Last Name" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="firstName">First Name</label>
                                                        <input class="form-control py-4" 
                                                        id="firstName" 
                                                        name="firstName" 
                                                        type="text" 
                                                        placeholder="Enter First Name" />
                                                    </div>
                                                </div>
												<div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="midName">Middle Name</label>
                                                        <input class="form-control py-4" 
                                                        id="midName" 
                                                        name="midName" 
                                                        type="text" 
                                                        placeholder="Enter Middle Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="brgyPosition">Position</label>
                                                        <input class="form-control py-4" 
                                                        id="brgyPosition" 
                                                        name="brgyPosition" 
                                                        type="text" 
                                                        placeholder="Enter Position" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="userInput">Username</label>
                                                        <input class="form-control py-4" 
                                                        id="userInput" 
                                                        name="userInput" 
                                                        type="text" 
                                                        placeholder="Enter Username" />
                                                    </div>
                                                </div>
                                            </div>
											<div class="form-row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="inputPass">Password</label>
                                                        <input class="form-control py-4" 
                                                        id="inputPass" 
                                                        name="inputPass" 
                                                        type="text" 
                                                        placeholder="Enter Password" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="rptPass">Confirm Password</label>
                                                        <input class="form-control py-4" id="rptPass" type="text" placeholder="Re-enter Password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group mt-4 mb-0"><button id = "signSubmit" name = "signSubmit"class="btn btn-primary btn-block" href="login.html" onclick="return myFunction()">Create Account</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="js/scripts.js">
        </script>
    </body>
</html>
