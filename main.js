/*JavaScript*/


/*jQuery UI Date Picker*/
$( "#date" ).datepicker();


/*jQuery UI Menu*/
$( "#menu" ).menu();


/*Show/Hide Timed Pop Up*/

function showPopUp() {
	var popUp = document.querySelector("body div#popUp");
	var isHidden = true;

	if(isHidden) {
		setTimeout(showPopUp, 10000);
		popUp.classList.remove("popUpHidden");
		isHidden = true;

		var stayButton = document.querySelector("a.stay");
		var exitButton = document.querySelector("a.exit");

		stayButton.addEventListener('click', function (evt) {
			console.log('clicked');
			popUp.classList.add("popUpHidden");
			isHidden = true;
			setTimeout(showPopUp, 10000);
		})

		exitButton.addEventListener('click', function (evt) {
			console.log('clicked');
			window.location.href="http://www.google.com";
		})
	}
}

setTimeout(showPopUp, 10000);


