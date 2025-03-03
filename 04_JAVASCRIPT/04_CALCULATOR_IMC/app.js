function calculeazaIMC() {
	var inputGreutate = document.getElementById('greutate');
	var greutate = Number(inputGreutate.value);

	var inputInaltime = document.getElementById('inaltime');
	var inaltime = Number(inputInaltime.value);

	var imc = greutate / (inaltime * inaltime);

	var categorie;
	var culoare;

	if (imc < 18.5) {
		categorie = 'subponderal';
		culoare = 'blue';
	} else if (imc >= 18.5 && imc < 24.9) {
		categorie = 'normoponderal';
		culoare = 'green';
	} else if (imc >= 25 && imc < 29.9) {
		categorie = 'supraponderal';
		culoare = 'orange';
	} else {
		categorie = 'obezitate';
		culoare = 'red';
	}

	var paragrafRezultat = document.getElementById('output');
	paragrafRezultat.innerHTML = 'IMC: ' + imc.toFixed(2) + ' - ' + categorie;
	paragrafRezultat.style.color = culoare;
}
