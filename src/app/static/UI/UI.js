

(function(){

    "use strict";


    /* -------------------------------------------------------------------- */
    /*
            App.UI
    */
    /* -------------------------------------------------------------------- */


    App.namespace("App.UI");


    /* -------------------------------------------------------------------- */
    /*
            Public
    */
    /* -------------------------------------------------------------------- */


    App.UI = {

        initialize : function(){

            this.banner.initialize();

            this.menu.initialize();

            this.stages.initialize();

            this.initializeScrollFades();

            window.setTimeout(function(){

                $(window).trigger("scroll").trigger("resize");

            }, 0);

        },

        initializeScrollFades : function(){

            var win = $(window);

            var elems = $(".scroll-fade");

            win.scroll(function(){

                elems.each(function(i){

                    if($(this).is(":hidden") || $(this).data("fade_initialized") !== undefined){
                        return;
                    }

                    var bottom_of_object = $(this).offset().top + 200;
                    var bottom_of_window = win.scrollTop() + win.height();

                    /* If the object is completely visible in the window, fade it it */
                    if(bottom_of_window > bottom_of_object){

                        $(this).animate({ "opacity" : "1" }, 1000);
                        $(this).data("fade_initialized", 1);

                    }

                });

            });

        }

    };


    /* -------------------------------------------------------------------- */
    /*
            Bootstrap
    */
    /* -------------------------------------------------------------------- */


    $(document).ready(function(){

        App.UI.initialize();

    });


})();
