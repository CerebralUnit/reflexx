<!DOCTYPE HTML>

<?php
function minify_output($buffer) {
    $search = array(
        '/\>[^\S ]+/s',  // strip whitespaces after tags, except space
        '/[^\S ]+\</s',  // strip whitespaces before tags, except space
        '/(\s)+/s'       // shorten multiple whitespace sequences
    );
    $replace = array(
        '>',
        '<',
        '\\1'
    );
    $buffer = preg_replace($search, $replace, $buffer);
    return $buffer;
}
ob_start("minify_output");
?>
<html>
	<head>
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width,height=device-height">
		<title> Ahern IT - System Integration Solutions</title>
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>
	<body ontouchstart="">

        <div id="nav-div">
        	<div id="logo">
        		<img width="300" height="194" alt="Ahern IT Logo 1" src="img/aitdarklogo.png">
        	</div>
        	<div id="contact">
                <img width="60" height="60" alt="Ahern IT Telephone Icon" class="phone-img" src="img/phone.png"> Call Now: 702-519-3740
            </div>

        </div>
    
        <div id="slider-nav-top"></div>

        <div id="slider">
            <div class="content">
                <h1>Ahern IT is North America's leading independent provider of IT services and solutions</h1>
                <p>We strive to build quality IT solutions that bring efficiency, effectiveness, and return on investments
            </div>
        </div>

        <div id="slider-nav">
            <div class="learnmore"><a data-speed="500" data-easing="easeInOutCubic" data-url="false" href="#0" class="bigbutton scroll"> Learn More</a></div>
             <div class="quote"><a data-speed="500" data-easing="easeInOutCubic" data-url="false" href="#" class="bigbutton2 scroll"> Get a Quote</a></div>
            <div class="marketingcontainer">
                <div class="marketing sweet-justice">
                    <div class="mkcont sweet-justice">
                        <div class="sidepic"><img width="100" height="75" src="img/infra.png" alt="Ahern IT Digital Infrastructure Icon"></div>
                        <h2>Infrastructure</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dolore, itaque deserunt vero 
                            provident reprehenderit in quia vitae beatae eos adipisci est atque deleniti officia labore 
                            nostrum modi error eveniet?</p>
                   </div>
                   <div class="learnsm"><a data-speed="500" data-easing="easeInOutCubic" data-url="false" href="#1" class="smallbutton scroll"> Learn More</a></div>
                </div>

                <div  class="marketing middlemk sweet-justice middle">
                  <div class="mkcont sweet-justice ">

                    <div class="sidepic"><img width="100" height="75" src="img/virtu.png" alt="Ahern IT Virtualization Icon"></div>

                      <h2>Virtualization</h2>
                         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in officiis placeat quae
                             perspiciatis obcaecati magnam reiciendis asperiores architecto consequuntur. Nostrum, non 
                             quibusdam placeat quae mollitia dolore culpa tenetur eos.</p>
                 </div> 
                  <div class="learnsm"><a data-speed="500" data-easing="easeInOutCubic" data-url="false" href="#2" class="smallbutton scroll"> Learn More</a></div>
                </div>
                <div  class="marketing ">
                   <div class="mkcont sweet-justice">
                        <div class="sidepic"><img width="100" height="75" src="img/security.png" alt="Ahern IT Security Icon"></div>
                        <h2>Security</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta necessitatibus aliquam porro
                           ut quis rerum ipsam nostrum fuga nihil dignissimos. Dolore, similique, cupiditate dolorem esse 
                           quibusdam expedita tenetur magni ratione!</p>
                    </div>
                    <div class="learnsm"><a data-speed="500" data-easing="easeInOutCubic" data-url="false" href="#3" class="smallbutton scroll"> Learn More</a></div>
                </div>
            </div>
        </div>

        <div id="main-content" >
            <div class="backtotop"><img width="170" height="66"  alt="Ahern IT Logo" src="img/aitlogolight.png" /><span class="fixed-contact">Call Now: 702-519-3740</span><br><a data-speed="500" data-easing="easeInOutCubic" data-url="false" href="#nav-div" class="smallbutton scroll">Back to Top</a> </div>
            <div id="0" class=" content align-middle sweet-justice">
                 <h2>About AIT</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, vel, consectetur dolorum vitae maiores ipsam eaque quam praesentium consequuntur qui. Aspernatur, quaerat velit possimus inventore explicabo minus ducimus quam error?</p>
                <p>Reprehenderit, iure, modi sint minus nobis optio non voluptates placeat commodi debitis amet culpa perferendis ullam atque sapiente ducimus repudiandae adipisci magnam in accusantium eius suscipit consequatur autem deserunt ipsam.</p>
                <p>Perferendis, delectus, molestiae, quisquam, nam deleniti modi accusamus expedita atque similique eaque incidunt tenetur illo? Mollitia, vero, ab, odit atque repudiandae non delectus pariatur facere fugit ipsam et iure quo!</p>
                <p>A, ut, similique quibusdam magnam dolorum reprehenderit labore ab debitis illo quia atque eaque tenetur! Assumenda, error, deleniti nesciunt totam in aliquid quia laudantium explicabo eius debitis inventore ducimus fuga.</p>
            </div>
            <div id="1" class="content align-middle sweet-justice">
                   <h2>Infrastructure</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, distinctio, aliquid, quasi, dolorum beatae nemo voluptatum nobis hic inventore praesentium enim suscipit quam corporis velit perferendis obcaecati consequuntur nam quos.</p>
                <p>Est, amet, similique, vero sequi sapiente corporis perspiciatis atque quasi ad maxime nobis tempora. A, iste et delectus nostrum ab voluptates beatae sequi quaerat quasi totam molestiae qui temporibus dicta.</p>
                <p>Iusto velit dolorem est culpa architecto. Aliquam, ea ipsa nam praesentium autem earum labore rerum deserunt molestias. Reiciendis, sit, inventore, eum aperiam nesciunt unde velit commodi sed iure nostrum vero?</p>
                <p>Ipsum, tempora quibusdam nobis non modi rerum nihil repellendus aspernatur perferendis doloremque? Ratione, doloribus dolorem ullam optio rem. Itaque, quis, ex eaque unde impedit modi sed nesciunt voluptates praesentium a.</p>
            </div>
            <div id="2" class="content align-middle sweet-justice">
                <h2>Virtualization</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, nostrum, voluptatem est tempora molestias eligendi esse quas consequuntur repudiandae quasi! Quo, natus eveniet adipisci incidunt libero sed dolorem autem a.</p>
                <p>Ipsum, culpa at dolore quis molestiae aliquid pariatur repellendus nulla soluta. Ipsa, harum, repellendus debitis quo modi dolorem eos. Ipsum, debitis aperiam labore magni adipisci nesciunt hic vel eveniet mollitia.</p>
                <p>Omnis, nemo, explicabo quam similique rerum neque tenetur cum ea cupiditate maxime quaerat beatae animi modi sunt sit error et ducimus rem at est perferendis dicta vel suscipit alias quidem.</p>
            </div>
            <div id="3" class="content align-middle sweet-justice">
                 <h2>Security</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, earum, modi, omnis sapiente nesciunt molestiae ducimus ex fuga dignissimos nobis vitae quia assumenda adipisci pariatur voluptatibus dicta laudantium neque vero.</p>
                <p>Maiores autem modi molestias corrupti vel porro doloremque voluptatum sint pariatur? Repellat, magni, nam adipisci maiores libero corrupti commodi harum corporis tenetur necessitatibus suscipit consequatur quos veniam voluptatem doloribus placeat.</p>
                <p>Sapiente, aperiam incidunt reiciendis maxime enim rem error veniam quas placeat quidem officiis doloremque molestias nostrum aliquid labore nulla repellendus laborum laboriosam possimus aspernatur! Consectetur adipisci eos officia placeat expedita!</p>
                <p>Voluptatum, asperiores, quasi, perspiciatis vitae voluptatibus hic doloribus aliquam consequatur ipsum possimus quisquam adipisci ea autem error qui quam id optio officia officiis deleniti modi necessitatibus accusantium ad temporibus eius.</p>
                <p>Culpa, est, ipsam officia in itaque vero facere ea sunt voluptate veritatis iure velit quod consequuntur recusandae enim non earum aut voluptatem eligendi nihil quia alias consequatur illo nesciunt fugit?</p>
            </div>
        </div>

        <div id="footer-nav">
                <div id="ait-footer">
                    <div class="footer-top">
                        <div id="footer-description">
                            <img width="300" height="194" alt="Ahern IT Logo" id="footer-logo" src="img/aitdarklogo.png" alt=""><br>
                        </div>

                </div>
                </div>
            </div>

        <div id="footer">
            &copy;2014 Ahern IT System Integration Inc. All Rights Reserved.
        </div>
            <script type="text/javascript" src="js/sweet-justice.js" ></script>
            <script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
            <script type="text/javascript" defer>
            (function($) {
                jQuery(document).ready(function($) {
                    $(".scroll").click(function(event){ 
                        event.preventDefault(); 
                        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500); 
                    });
                });
            })(jQuery);
            </script>
            <script type="text/javascript" >
            $(document).scroll(function () {
                var y = $(this).scrollTop();
                if (y > 770) {
                    $('.backtotop').fadeIn("fast");
                } else {
                    $('.backtotop').fadeOut("fast");
                }
            });
            </script>
            <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/respond.js/1.3.0/respond.js" defer></script>
	</body>
</html>