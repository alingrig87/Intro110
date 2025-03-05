function afiseazaProcentaj() {
	var numarAruncari = Number(document.getElementById('nr-aruncari').value);
	var deCateOriSaDat66 = 0;

	for (var i = 1; i <= numarAruncari; i++) {
		var zaruri = aruncaZarurile();
		if (zaruri[0] == 6 && zaruri[1] == 6) {
			deCateOriSaDat66 = deCateOriSaDat66 + 1;
		}
	}

	var output = document.getElementById('output');
	output.innerHTML =
		'Din ' +
		numarAruncari +
		' aruncari ' +
		's-a dat 6 6 de ' +
		deCateOriSaDat66 +
		' ori';
}

function aruncaZarurile() {
	var zar1 = parseInt(Math.random() * 6 + 1);
	var zar2 = parseInt(Math.random() * 6 + 1);

	return [zar1, zar2];
}
