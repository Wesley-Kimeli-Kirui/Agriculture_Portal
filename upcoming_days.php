<?php

//Connection Establishment  : 
session_start();
$userlogin = $_SESSION['farmer_login_user'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "agriculture_portal";

//Create Connection 
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function encrypt($message, $encryption_key)
{
    $key = hex2bin($encryption_key);
    $nonceSize = openssl_cipher_iv_length('aes-256-ctr');
    $nonce = openssl_random_pseudo_bytes($nonceSize);
    $ciphertext = openssl_encrypt(
        $message,
        'aes-256-ctr',
        $key,
        OPENSSL_RAW_DATA,
        $nonce
    );
    return base64_encode($nonce . $ciphertext);
}
function decrypt($message, $encryption_key)
{
    $key = hex2bin($encryption_key);
    $message = base64_decode($message);
    $nonceSize = openssl_cipher_iv_length('aes-256-ctr');
    $nonce = mb_substr($message, 0, $nonceSize, '8bit');
    $ciphertext = mb_substr($message, $nonceSize, null, '8bit');
    $plaintext = openssl_decrypt(
        $ciphertext,
        'aes-256-ctr',
        $key,
        OPENSSL_RAW_DATA,
        $nonce
    );
    return $plaintext;
}

$pk = "1a851867be761f7725cacf7467a184d3";

$display_district_name = "";

$display_district = "Select F_District from farmerlogin WHERE email='$userlogin'";
$display_district_result = mysqli_query($conn, $display_district);
$display_district_name = mysqli_fetch_array($display_district_result);
$District_name_farmer = $display_district_name[0];
$District_name_farmer = decrypt($District_name_farmer, $pk);

ini_set('memory_limit', '-1');
$url = 'county.json'; // path to your JSON file
$data = file_get_contents($url); // put the contents of the file into a variable
$district = json_decode($data); // decode the JSON feed
// var_dump($district);
/* $ke_country = [];
foreach ($district as $dt) {

    if ($dt->country == "KE") {
        $ke_country[] = $dt;
    }
} */
/* $io = 0;
$ke_country = [];
foreach($district as $dt){
    if($io == 10){
        break;
    } else{
        if($dt->country == "KE"){
            $ke_country[] = $dt;
            $io++;
        }
        
    }
} */
/* print_r($ke_country);
$ke_response = json_encode($ke_country);
file_put_contents("county.json", $ke_response); */
/* $district_weather_id = 0;

foreach ($district as $district) {

    if ($district->name == trim($District_name_farmer)) {
        $district_weather_id = $district->id;
        echo $district_weather_id;
    }
}
if ($district_weather_id <= 0) {
    $district_weather_id = 1275339;
}
$city_weather_id = strval($district_weather_id); */

date_default_timezone_set("Africa/Nairobi");
$apiKey = "2b2642bd9f8f09545935f30e40744b7a"; //Your API KEY 
// initalize temp counties array
$tp_county_id = [];
$k = 0;
foreach ($district as $dst) {
    $tp_county_id[] = $dst->id;
}
// WeatherApi City_Id Code : 
if (isset($_POST['view_new_location'])) {
    $city_id = $_POST['city'];
    $cityId = $city_id;
} else {
    // get a random county id
    $cityId = $tp_county_id[array_rand($tp_county_id)];
}

// echo $cityId;
// echo $cityId . "<br>";
// $cityId = $city_weather_id;
// echo $cityId;
//https://api.openweathermap.org/data/2.5/forecast?id=1273293&appid=d3766b1a3beca710fe9e2f0af154f7ed
// $googleApiUrl ="https://api.openweathermap.org/data/2.5/forecast?id=1273293&appid=" . $cityId . "&lang=en&units=metric&APPID=" . $apiKey;
$googleApiUrl = "https://api.openweathermap.org/data/2.5/forecast?id=" . $cityId . "&appid=" . $apiKey;

$ch = curl_init();
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, $googleApiUrl);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec($ch);

curl_close($ch);

// }
// file_put_contents('county_weather.json', json_encode($tp_county_id));
// $url_weather = 'county_weather.json'; // path to your JSON file
// $data_weather = file_get_contents($url_weather); // put the contents of the file into a variable
// $data = file_get_contents($url_weather); // put the contents of the file into a variable
// $data = json_decode($data_weather); // decode the JSON feed
// var_dump($data_weather);
$data = json_decode($response);
// var_dump($data);
$currentTime = time();
$forecast = $data->list;
?>

<!doctype html>
<html>

<head>
    <title>Forecast Weather using OpenWeatherMap</title>

    <style>
        body {
            font-family: Arial;
            font-size: 0.95em;
            color: #929292;
        }

        .report-container {
            border: #E0E0E0 1px solid;
            padding: 20px 40px 40px 40px;
            border-radius: 2px;
            width: 550px;
            margin: 0 auto;
        }

        .weather-icon {
            vertical-align: middle;
            margin-right: 20px;
        }

        .weather-forecast {
            color: #212121;
            font-size: 1.2em;
            font-weight: bold;
            margin: 20px 0px;
        }

        span.min-temperature {
            margin-left: 15px;
            color: #929292;
        }

        .time {
            line-height: 25px;
        }

        .view_county_weather {
            width: 300px;
            color: #212121;
            font-size: 1.2em;
            font-weight: bold;
            margin: 20px auto;
            justify-content: center;
            align-items: center;
        }
    </style>

    <link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.min.js"></script>

    <!-- Custom Theme files -->
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <!-- Custom Theme files -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="Gardening Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <!--webfont-->
    <link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Niconne' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <!--/script-->
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 900);
            });
        });
    </script>

</head>

<body>

    <!-- header-section-starts -->
    <div class="header-banner" style="min-height:210px">
        <div class="container">

            <div class="header-top">
                <div class="social-icons">
                    <div id="google_translate_element"></div>

                    <script type="text/javascript">
                        function googleTranslateElementInit() {
                            new google.translate.TranslateElement({
                                pageLanguage: 'en',
                                includedLanguages: 'swa,en,ki,af,hi'
                            }, 'google_translate_element');
                        }
                    </script>

                </div>

                <span class="menu"><img src="images/nav.png" alt="" /></span>
                <div class="top-menu">
                    <ul>
                        <nav class="cl-effect-13">
                            <li><a href="farmer_index.php">Home</a></li>
                            <li><a href="php/logout.php">Logout</a></li>
                        </nav>
                    </ul>
                </div>
                <!-- script for menu -->
                <script>
                    $("span.menu").click(function() {
                        $(".top-menu ul").slideToggle(300, function() {
                            // Animation complete.
                        });
                    });
                </script>
                <!-- //script for menu -->

                <div class="clearfix"></div>
            </div>

            <div class="banner-info text-center">
                <h1><a href="#">Weather Prediction</a></h1>
            </div>

        </div>
    </div>
    <!-- header-section-ends -->
    <div class="view_county_weather">
        <!-- title -->
        <h2>View Weather Forecast</h2>
        <!-- select to choose location to view weather from -->
        <form action="" method="post">
            <select name="city">
                <!-- read county.json -->
                <?php
                $json = file_get_contents('county.json');
                $json_data = json_decode($json, true);
                // var_dump($json_data);
                foreach ($json_data as $data_select) {
                    echo '<option value="' . $data_select['id'] . '">' . $data_select['name'] . '</option>';
                }
                ?>
            </select>
            <input type="submit" name="view_new_location" value="View" />
        </form>
    </div>

    <div class="report-container">

        <h2><?php echo $data->city->name; ?> Weather Status</h2>
        <div class="weather-forecast">
            <?php $loop = 0;
            foreach ($forecast as $f) {
                $loop++; ?>
                <div>
                    <h3><?php echo $f->dt_txt; ?></h3>
                    <div class="weather-forecast">
                        <img src="http://openweathermap.org/img/w/<?php echo $f->weather[0]->icon; ?>.png" class="weather-icon" /> <?php
                                                                                                                                    // convert temperature to celsius
                                                                                                                                    $temp_celcius_max = $f->main->temp_max - 273.15;
                                                                                                                                    $temp_celcius_min = $f->main->temp_min - 273.15;
                                                                                                                                    echo $temp_celcius_max; ?>&deg;C<span class="min-temperature"><?php echo $temp_celcius_min; ?>&deg;C</span>
                    </div>
                    <div class="time">
                        <div>Description:<?php echo $f->weather[0]->main . ',' . $f->weather[0]->description; ?> </div>
                        <div>Humidity: <?php echo $f->main->humidity; ?> %</div>
                        <div>Wind: <?php echo $f->wind->speed; ?> km/h</div>
                    </div>
                    <hr style="border-bottom:1px solid #fff;">
                </div>
            <?php } ?>
        </div>
    </div>

    <!-- footer-section -->
    <div class="footer">
        <div class="container">
            <div class="copyright text-center">
                <p>&copy; 2023 Mkulima Portal. All rights reserved | Design by Wesley </a></p>
            </div>
        </div>
    </div>
    <!-- footer-section -->
    <script type="text/javascript">
        $(document).ready(function() {
            /*
            var defaults = {
            containerID: 'toTop', // fading element id
            containerHoverID: 'toTopHover', // fading element hover id
            scrollSpeed: 1200,
            easingType: 'linear' 
            };
            */
            $().UItoTop({
                easingType: 'easeOutQuart'
            });
        });
    </script>
    <a href="#to-top" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>
    <!--Google translate-->
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

</body>

</html>