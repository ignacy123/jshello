(function () {
    window.onload = function () {

        function removeClass (name, removedClass){
            return name.replace(removedClass, "");

        }

        var listElem = document.getElementsByClassName("main");
        console.log(1,listElem);
        for (var i = 0; i < listElem.length; i++) {
            listElem[i].addEventListener("click", function (e) {
                e.stopPropagation();
                console.log(this, e);
                var child = this.children[0];
                child.className += " open";

            })
        }
        window.addEventListener("click", function () {
            var listOpen = document.getElementsByClassName("open");
            console.log(2,listOpen);
            for (var i = 0; i < listOpen.length; i++) {
                listOpen[i].className = "";
            }
        })
    }//TODO: window add event listener nie działa,
})()
