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
    }

	// DOMKNIĘCIE JS - zmiennie liczba1 i liczba2 stają się prywatne
    // funkcja ma zawsze dostęp do kontekstu, w którym została utworzona, dlatego funkcje getLiczbaX oraz setLiczbaX
    // mają dostęp do zmienny liczba1 i liczba 2 będących polami obiektu

	var testowaKlasa = function(liczba){

		var liczba1 = liczba;
		var liczba2 = 5;

		return {
			jakisString: "oidsmfosidvm",
			getLiczba1: function(){
				return liczba1;
			},
			getLiczba2: function(){
				return liczba2;
			},
            setLiczba1: function(nowaLiczba){
			    liczba1 = nowaLiczba;
            }
		}
	}

	var testowyObiekt = testowaKlasa(1111119);

	console.log(testowyObiekt.getLiczba1());
	console.log(testowyObiekt.getLiczba2());
	console.log(testowyObiekt.jakisString);

	testowyObiekt.setLiczba1(222222);

	console.log(testowyObiekt.getLiczba1());

})()
