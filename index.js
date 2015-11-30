(function (window) {
	var morse   = {};
	var aoutput = document.querySelector('.morser-output');
	var ainput  = document.querySelector('.morser-input');
	var abtn    = document.querySelector('.morser-po');

	var bindEvent = function () {
		abtn.onclick = function () {
			aoutput.value = morseLib(ainput.value);

		}
	}
	bindEvent();
	// var bindDecrypt = function () {

	// }
	// var bindSound = function () {

	// }
	var morseLib = function (key) {
		switch (key) {
			case '.-': 
				return 'A';
			case '.-': 
				return 'A';
			case '.-': 
				return 'A';
			case '.-': 
				return 'A';
			case '.-': 
				return 'A';
			case '.-': 
				return 'A';
			case '.-': 
				return 'A';
			case '.-': 
				return 'A';
			case '.-': 
				return 'A';
		}
	}

	window.morse = morse;
})(window)