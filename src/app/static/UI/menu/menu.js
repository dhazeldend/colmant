

(function(){

    "use strict";


    /* -------------------------------------------------------------------- */
    /*
            App.UI.menu
    */
    /* -------------------------------------------------------------------- */


    App.namespace("App.UI.menu");


    /* -------------------------------------------------------------------- */
    /*
            Public
    */
    /* -------------------------------------------------------------------- */


    App.UI.menu = {

        initialize : function(){

            var menu = $(".navbar");
            var links = menu.find("ul.nav");
            var anchors = $("a.anchor");
            var body = $("html, body");
            var ul = menu.find("ul");
            var doc = $(document);
            var win = $(window);

            win.bind("scroll.banner", function(){

                var st = doc.scrollTop();

                // open class toggle

                menu.toggleClass("open", st > 150);

                // menu item selection

                var closest = null;
                var match = null;

                anchors.each(function(){

                    var abs = Math.abs($(this).offset().top - st);

                    if(closest === null || abs < closest){

                        closest = abs;
                        match = $(this);

                    }

                });

                links.find("li").removeClass("selected");

                links.find("a[href = '#" + match.attr("name")  + "']").parent("li").addClass("selected");

                if(match.attr("name") === "home"){
                    $(".navbar").fadeOut("fast");
                }else{
                    $(".navbar").fadeIn("fast");
                }

            });


            /* ----------------------------------------------------------- */
            /*
                    Scroll Event
            */
            /* ----------------------------------------------------------- */


            /* ----------------------------------------------------------- */
            /*
                    Anchor Link Clicks
            */
            /* ----------------------------------------------------------- */


            menu.find("a").each(function(){

                var href = $(this).attr("href");

                if(href.indexOf("#") === 0){

                    $(this).click(function(e){

                        var id = href.replace(/#/g, "");
                        var top = 0;

                        top = $("#anchor-" + id).offset().top;

                        body.stop().animate({ scrollTop : top }, 500, "swing");

                        e.preventDefault();

                        e.stopPropagation();

                        return false;

                    });

                }

            });


            /* ----------------------------------------------------------- */
            /*
                    Menu Toggle
            */
            /* ----------------------------------------------------------- */


            menu.find("span.menu-toggle").click(function(){

                menu.toggleClass("toggled");

            });


        }

    };


})();
