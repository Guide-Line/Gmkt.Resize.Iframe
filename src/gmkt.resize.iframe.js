// 2016.02.02
// Gmkt Iframe Resizer

$(function($) {

    $.fn.GmktResizeIframe = function(options) {
        var $ifr = this;

        var settings = {
            type : "default"
        };

        var GmktResizeIframe = function() {

            // only for GMKT Iframe
            if ( ($ifr.attr("src").indexOf("gmarket") ) < 0 ) return;

            // Select Type
            if( settings.type == "sns" ){

                $ifr.attr("height",$ifr.contents().find("#content").height() );

            }else{

                $ifr.attr("height",$ifr.contents().find("body").height() );

            }

        };

        $(document).ready(function(){

            document.domain = "gmarket.co.kr";

            if(options) {

                $.extend(settings, options);

            }

            setTimeout(function(){GmktResizeIframe()},300);

        });
        
        $(window).resize(GmktResizeIframe).trigger('resize');
        $(window).scroll(GmktResizeIframe).trigger('scroll');

        return this;

    };

});