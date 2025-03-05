function afiseazaUrmatorulNumar() {
	var input = document.getElementById('n1');
	var number = Number(input.value);
	var nextNumber = number + 1;

	var output = document.getElementById('output1');
	output.innerHTML = 'Urmatorul numar este: ' + nextNumber;
}

function afiseazaOpusulNumarului() {
	var input = document.getElementById('n2');
	var number = Number(input.value);
	var oppositeNumber = number * -1;

	var output = document.getElementById('output2');
	output.innerHTML = 'Opusul numarului este: ' + oppositeNumber;
}

function afiseazaSemnulNumarului() {
	var input = document.getElementById('n3');
	var number = Number(input.value);
	var mesaj;

	if (number > 0) {
		mesaj = 'S-a introdus o valoare pozitiva';
	} else if (number < 0) {
		mesaj = 'S-a introdus o valoare negativa';
	} else {
		mesaj = 'S-a introdus o valoare nula';
	}

	var output = document.getElementById('output3');
	output.innerHTML = mesaj;
}

function interschimbaValorile() {
	var input1 = document.getElementById('n4');
	var input2 = document.getElementById('m4');

	var tmp = input1.value;
	input1.value = input2.value;
	input2.value = tmp;
}

function afiseazaDeLa1LaN() {
	var input = document.getElementById('n5');
	var n = Number(input.value);
	var output = document.getElementById('output5');
	output.innerHTML = '';

	for (var i = 1; i <= n; i++) {
		output.innerHTML =
			output.innerHTML + ' ' + '<div class="circle">' + i + '</div>';
	}
}

function afiseazaDivizorii() {
	var input = document.getElementById('n6');
	var n = Number(input.value);
	var output = document.getElementById('output6');
	output.innerHTML = '';

	for (var i = 1; i <= n; i++) {
		if (n % i == 0) {
			output.innerHTML =
				output.innerHTML + ' ' + '<div class="circle">' + i + '</div>';
		}
		// else {
		// 	output.innerHTML =
		// 		output.innerHTML + ' ' + '<div class="circle blue">' + i + '</div>';
		// }
	}
}

function afiseazaProcentajVocale() {
	var input = document.getElementById('text7');
	var text = input.value.toLowerCase();
	var numarDeVocale = 0;
	var numarSpatiiAlbe = 0;

	for (var i = 0; i <= text.length - 1; i++) {
		if (
			text[i] == 'a' ||
			text[i] == 'e' ||
			text[i] == 'i' ||
			text[i] == 'o' ||
			text[i] == 'u'
		) {
			numarDeVocale = numarDeVocale + 1;
		}
		if (text[i] == ' ') {
			numarSpatiiAlbe = numarSpatiiAlbe + 1;
		}
	}

	var procentajVocale = (numarDeVocale / (text.length - numarSpatiiAlbe)) * 100;

	var output = document.getElementById('output7');
	output.innerHTML =
		'Procentajul de vocale este: ' + procentajVocale.toFixed(2) + '%';
}
