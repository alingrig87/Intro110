function calculeazaSumaSiProdusul() {
	var a = Number(document.getElementById('first-number').value);
	var b = Number(document.getElementById('second-number').value);

	var sum = a + b;
	var prod = a * b;

	var p = document.getElementById('output');
	p.innerHTML = 'Suma este ' + sum + ' si produsul este ' + prod;
}
