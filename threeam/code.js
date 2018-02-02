$(function() {

    var q1 = $(function() {

        $(".question").html("<p>Its 3am and you hear a crash downstairs do you…</p>");


        $(".buttons").html("<button class='btn run'>Run down there</button><button class='btn wake-up'>wake up your partner first</button>");

        $(".run").click(function() {

            $(".question").html("<p>You run downstairs and it’s pitch black you could…</p>")
            $(".buttons").html("<button class='btn phone'>Turn on phone</button><button class='btn light'>Reach for light switch</button>")
            q2();

        });
        $(".wake-up").click(function() {
            $(".question").html("<p>Your partner is cranky and just runs downstairs because you were scared, you could….</p>")
            $(".buttons").html("<button class='btn help'>run after them to help</button><button class='btn wait'>wait upstairs </button>")
            q3();
        });


    });


    var q2 = (function() {

        $(".phone").click(function() {
            $(".buttons").html("<img class='pic' src='https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Courage-The-Cowardly-Dog-Full-HD-Wallpaper-PIC-WPB001801.jpg'>")
            $(".question").html("<h3>You turn the flash on your phone on just to see it was only your dog</h3>")
            $(".footer").html("<button class='btn start-over'>Play again</button>")
            $(".start-over").click(function() {
                 $(".footer").html("<h2>Refresh for a new adventure</h2>")
            });
        });

        $(".light").click(function() {
            $(".buttons").html("<img class='pic' src='https://i.ytimg.com/vi/KBK8S_ENq5Y/maxresdefault.jpg'>")
            $(".question").html("<h3>you get hit with a heavy object from behind and put in a van. Great choice!</h3>")
            $(".footer").html("<button class='btn start-over'>Play again</button>")

            $(".start-over").click(function() {
                 $(".footer").html("<h2>Refresh for a new adventure</h2>")
            });
        });

    });

    var q3 = (function() {

        $(".wait").click(function() {
            $(".buttons").html("<img class='pic' src='https://ak3.picdn.net/shutterstock/videos/6598763/thumb/1.jpg'>")
            $(".question").html("<h3>they come back and say it was only the dog, now u have to sleep on couch for a week. </h3>")
            $(".footer").html("<button class='btn start-over'>Play again</button>")
            $(".start-over").click(function() {
                 $(".footer").html("<h2>Refresh for a new adventure</h2>")
            });
        });

        $(".help").click(function() {
            $(".buttons").html("<img class='pic' src='http://i.dailymail.co.uk/i/pix/2011/08/25/article-2029865-0D7E773B00000578-450_634x383.jpg'>")
            $(".question").html("<h3>you slip on and ice cube and rupture both kidneys and break your sternum. You have 1 week to live. Great choice!</h3>")
            $(".footer").html("<button class='btn start-over'>Play again</button>")

            $(".start-over").click(function() {
                $(".footer").html("<h2>Refresh for a new adventure</h2>")
            });

        });

    });
    
  



})