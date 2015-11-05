

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

            $('#myCarousel').bind('slid.bs.carousel', function(e){
                if($("div.active").hasClass("blank")){

                    // home screen
                    $("#logo").animate({
                        opacity: 1,
                        zoom:1
                    });

                    $(".splash").removeClass("largeSplash");
                    $("#btn-enter").removeClass("largeButton");

                }else{

                    //gallery screen
                    $("#logo").animate({
                        opacity: 0,
                        zoom:1.14
                    });

                    $(".splash").addClass("largeSplash");
                    $("#btn-enter").addClass("largeButton");
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
