(function($) {
    function deactivate() {
        currentSlide = $(".slide.active");
        currentSlide.removeClass("active");
        currentCtl = $(".ctl.active");
        currentCtl.removeClass("active");
    }

    function activateAt(a) {
        $(".slide").eq(a).addClass("active");
        $(".ctl").eq(a).addClass("active");
    }

    function nextSlide() {
        deactivate();
        currentSlide.next().addClass("active");
        currentCtl.next().addClass("active");
        if (currentSlide.next().length == 0) {
            activateAt(0);
            //$(".container").find(".slide").eq(0).addClass("active");
        }
    }
        var currentSlide;
        var currentCtl;
        $(document).ready(function () {
            var slidesLength = $(".container")[0].children.length;

            for (var i = 0; i < slidesLength; i++) {
                $(".controls").append("<figure class=\"ctl\"></figure>");
            }
            $(".controls").find("figure").eq(0).addClass("active");


            var carousel = setInterval(nextSlide, 5000);
            $(".ctl").on("click", function () {
                clearInterval(carousel);
                deactivate();
                activateAt($(this).index());
                carousel = setInterval(nextSlide, 5000);
            })
        });

})(jQuery);