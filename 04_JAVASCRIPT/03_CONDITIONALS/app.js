// IF
var n = 10;

if (n > 5) {
	console.log('Numarul este mai mare 5');
}

// IF ELSE
var varsta = 18;
if (varsta >= 18) {
	console.log('Poti obtine permise de conducere!');
} else {
	console.log('Nu poti obtine permis de conducere');
}

// IF ELSE IF ELSE
var temperatura = 10;
if (temperatura > 30) {
	console.log('Este foarte cald');
} else if (temperatura >= 15) {
	console.log('E o temperatura placuta');
} else {
	console.log('E cam frig afara');
}

// cu operatori logici
var ora = 14;
var esteWeekend = true;

if (ora >= 9 && ora <= 18 && !esteWeekend) {
	console.log('Este in timpul programului de lucru');
} else {
	console.log('Nu este in timpul programului');
}

// exemplu practic - verificare paritate numar
var nr = 12;
if (nr % 2 == 0) {
	console.log('Numarul este par');
} else {
	console.log('Numarul este impar');
}

// exercitiu
// se da un numar intre 1 si 10 sa se afiseze calificativul asociat dupa urmatoarea formula:
// [9 - 10] - A
// [8 - 9) - B
// [7 - 8) - C
// [6 - 7) - D
// orice altceva calificativul E
var nota = 9;
if (nota >= 9 && nota <= 10) {
	console.log('A');
} else if (nota >= 8 && nota < 9) {
	console.log('B');
} else if (nota >= 7 && nota < 8) {
	console.log('C');
} else if (nota >= 6 && nota < 7) {
	console.log('D');
} else {
	console.log('E');
}
