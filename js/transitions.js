(function($) {
    $(document).ready(function () {
        $(".q").click(function () {
            console.log(this);
            $(this).next().slideToggle();
        })
    });
})(jQuery);