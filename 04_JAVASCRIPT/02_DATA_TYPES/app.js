// Numbers
var n = 20;
console.log(n);
var f = 2.85;
console.log(f);

// Boolean
var isRaining = true;
console.log(isRaining);
console.log(!isRaining);

// String
var s = 'Ana are mere';
console.log(s);
var s1 = 5 + 5 + '5' + 5;
console.log(s1);

// Declarati 2 variabile - varsta si nume si faceti un console de genul "Ma numesc Costel si am 35 de ani"

var varsta = 37;
var nume = 'Alin';
console.log('Ma numesc ' + nume + ' si am ' + varsta + ' de ani');
console.log(`Ma numesc ${nume} si am ${varsta} de ani`);

var cnp = '1991212222446';
console.log('Sex:' + (cnp[0] % 2 == 1) ? 'M' : 'F');
console.log('Anul nasterii: ' + cnp.substring(1, 3));
console.log('Anul nasterii: ' + cnp[1] + cnp[2]);
console.log('Luna nasterii ' + cnp.substring(3, 5));

// Arrays
var numere = [1, 3, 8, 5];
var fructe = ['capsuni', 'cirese', 'banane'];
var nume = ['Daniel', 'Mihai', 'Andreea'];

console.log(
	'Ma numesc ' + nume[1] + ' si am mancat ' + numere[3] + ' ' + fructe[2]
);

fructe.push('caise');
console.log(fructe);
console.log(fructe.length);
