/*
KINTAMIEJI:

Iniciavimo budas:
const (yra pi, nekintantis dalykas) - default iniciavimo budas.
let - antrinis budas inicijuoti, kai zinomne, jog reiksme tures keistis.
var - pats seniausiasu ir geriau niekada nenaudoti, jei rupi saugumas.

Duomenu tipas:
- number (skaicius)
- string (sinonimas - tekstas)
- boolean (logine reiksme: true/false)
- array (masyvas, sarasas)
*/

const luckyNumber = 7;
console.log('Lucky number', luckyNumber);

let pinigine = 0;
console.log(pinigine);

pinigine = 5;
console.log('Pinigine:', pinigine);

const vardas = 'Maryte';
const pasisveikinimas =  'Laba diena, ' + vardas + '.';
console.log(pasisveikinimas);

//console.log(vardas);
//console.log('1) Laba diena, Petras.');
//console.log('2) Laba diena, ' + vardas + '.');

const arVedes = true;
const arTuriVaiku = false;
const arMeluojaDelVaiku = true;
console.log(arVedes, arTuriVaiku, arMeluojaDelVaiku);
console.log('Ar turi vaiku?', arTuriVaiku);
console.log(arMeluojaDelVaiku);

console.log(2 + 2 * 2);
console.log('2 + 2 * 2');

const pazymiai = [10, 10, 10, 10, 9];
console.log('Pazymiai:', pazymiai);

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log('Studentai', studentai);

const booleanList = [true, false, true, false, true];
console.log(booleanList);

const random = [1, "a", true, [10]];
console.log(random);