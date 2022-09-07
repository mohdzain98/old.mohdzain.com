
<html>
<head>
    <title>Mohd Zain</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"> 
     
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">

</head>
<body>
<nav class="navbar navbar-fixed-top">
    <div class="navbar-default" id="navbar"><!-- navbar start-->
        <div class="container"><!-- container start-->
            <div class="navbar-header">
                <a class="navbar-brand home" href="index.php">
                    <img src="logo1.png" alt="logo" class="hidden-xs" style="width:50px; height: 50px;"><!-- LOGO-->
                    <img src="logo2.png" alt="logo" class="visible-xs" style="width:50px; height:50px;">
                </a>


                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation">
                    <span class="sr-only">Toggle Navigation</span>
                    <i class="fa fa-align-justify"></i>
                    
                </button>
            </div>
            <div class="navbar-collapse collapse" id="navigation"> <!-- navbar start-->
                <div class="padding-nav"> <!-- padding start-->
                    <ul class="nav navbar-nav navbar-left">
                        <li>
                            <a href="index.php">About</a>
                        </li>
                        <li >
                            <a href="project.php">Projects</a>
                        </li>
                        <li class="active">
                            <a href="cv.php">Vitae</a>
                        </li>
                        

                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>
    <div class="container" style="margin-top: 70px;">
        <div class="col-md-12"><!--col start-->
            <ul class="breadcrumb">
                <li><a href="index.php">About</a></li>
                <li>
                    Vitae
                </li>
                
            </ul>
            
        </div>
        <div class="col-md-12 col-xs-12">
        <div class="box">
            <div class="box-header">
                <center><h3>Curriculum Vitae</h3></center>
               
                <a href="resume.png" download="GFG">
         <button class='btn btn-primary right'><i class="fa fa-download"></i> Download Image</button>
         </a>
                
            </div>
           <img src="resume.png" class="img-responsive">
        </div>
        
            
        </div> 
    </div>
    <?php
        include('footer.php');
    ?>


    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</body>
</html>