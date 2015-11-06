

(function(){

    "use strict";


    /* -------------------------------------------------------------------- */
    /*
            App.UI.banner
    */
    /* -------------------------------------------------------------------- */


    App.namespace("App.UI.banner");


    /* -------------------------------------------------------------------- */
    /*
            Public
    */
    /* -------------------------------------------------------------------- */


    App.UI.banner = {

        initialize : function(){

            $("#myCarousel").bind("slid.bs.carousel", function(e){

                if($("div.active").hasClass("blank")){

                    // home screen
                    $(".splash").removeClass("largeSplash");
                    $("#btn-enter").removeClass("largeButton");
                    $("#logo").animate({
                        opacity : 1,
                        zoom : 1
                    }, 1000);

                }else{

                    // gallery screen
                    $(".splash").addClass("largeSplash");
                    $("#btn-enter").addClass("largeButton");
                    $("#logo").animate({
                        opacity : 0,
                        zoom : 1.14
                    }, 1000);

                }

            });

            $("#btn-enter").click(function(e){

                $(".navbar").find("a[href = '#about']").click();

                e.preventDefault();

                e.stopPropagation();

            });

        }

    };


})();
