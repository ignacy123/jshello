(function($) {
    var currentSlide = 0;
    $(document).ready(function () {
        var slidesLength = $(".container")[0].children.length;

        for(var i = 0; i<slidesLength; i++){
            $(".controls").append("<figure class=\"ctl\"></figure>");
        }
        console.log($("controls"));
        $(".controls").children[0].addClass("active");



        console.log(slidesLength);
        setInterval(function(){

            currentSlide = $(".slide.active");
            currentSlide.removeClass("active");
            currentSlide.next().addClass("active");
        }, 3000);
    });
})(jQuery);