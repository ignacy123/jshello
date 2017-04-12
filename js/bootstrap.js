(function ($) {
    var email;
    var password;
    function login() {
        email = $("#inputEmail").val();
        password = $("#inputPassword").val();
        $.ajax({
            url:"localhost:8080/projectvocabulary/login",
            type:"POST",
            data:{
                email: email,
                password: password
            },
            error:function (err) {
                alert("Wystąpił błąd");
                console.log(err);
            },
            success:function (data) {
                console.log(data);
            }
        })
    }


    $("#loginFormButton").on("click", login);

})(jQuery);