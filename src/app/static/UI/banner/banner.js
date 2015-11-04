

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

            $("#btn-enter").click(function(e){

                $(".navbar").find("a[href = '#about']").click();

                e.preventDefault();

                e.stopPropagation();

            });

        }

    };


})();
