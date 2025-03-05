function afiseazaUrmatorulNumar() {
	var input = document.getElementById('n1');
	var number = Number(input.value);
	var nextNumber = number + 1;

	var output = document.getElementById('output1');
	output.innerHTML = 'Urmatorul numar este: ' + nextNumber;
}
