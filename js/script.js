(function () {
    window.onload = function () {

        function removeClass (name, removedClass){
            return name.replace(removedClass, "");

        }

        var listElem = document.getElementsByClassName("main");
        console.log(listElem);
        for (var i = 0; i < listElem.length; i++) {
            listElem[i].addEventListener("click", function (e) {
                console.log(this, e);
                var child = this.children[0]
                child.style.display = "block";
                child.className += " open";

            })
        }
        window.addEventListener("click", function () {
            var listOpen = document.getElementsByClassName("open");

            for (var i = 0; i < listOpen.length; i++) {
                listOpen[i].addEventListener("click", function (e) {
                    console.log(this, e);
                    var child = this.children[0]
                    child.style.display = "none";
                    child.className = removeClass(child.className, "open");

                })
            }
        })
    }//TODO: window add event listener nie działa,
})()
