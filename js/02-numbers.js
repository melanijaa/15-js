/*
NUMBERS:
- normalus:
    sveikieji
    desimtainiai
- nenormalus:
    nan (not-a-number)
    infinity; - infinity

OPERATORIAI:
++ - padidinimas vienu vienetu
-- - sumazinimas vienu vienetu
+=, -=, /=, *=, %= - saves paties reiksmes pakeitimas (a = a + 5 --> a += 5)
*/

const sveikasis = 5;
const desimtainis = 3.14;
const neigiamasDesimtainis = -3.14;
const neSkaicius = NaN;
const begalybe = Infinity;

const pirmas = 7;
const antras = 5;

const delmuo = pirmas / antras;
console.log(delmuo);

console.log('num; num');
console.log(7 + 5);
console.log(7 - 5);
console.log(7 * 5);
console.log(7 / 5);

console.log('num; string');
console.log(7 + '5');
console.log(7 - '5');
console.log(7 * '5');
console.log(7 / '5');

console.log('string; num');
console.log('7' + 5);
console.log('7' - 5);
console.log('7' * 5);
console.log('7' / 5);

console.log('string(num); string(num)');
console.log('7' + '5');
console.log('7' - '5');
console.log('7' * '5');
console.log('7' / '5');

console.log('string; num');
console.log('b' + 5);
console.log('b' - 5);
console.log('b' * 5);
console.log('b' / 5);

//true yra 1

console.log('num; true'); 
console.log(7 + true);
console.log(7 - true);
console.log(7 * true);
console.log(7 / true);

console.log('num; false');
console.log(7 + false);
console.log(7 - false);
console.log(7 * false);
console.log(7 / false);

console.log('true; num');
console.log(true + 7);
console.log(true - 7);
console.log(true * 7);
console.log(true / 7);

console.log('false; num');
console.log(false + 7);
console.log(false - 7);
console.log(false * 7);
console.log(false / 7);

console.log('-------')
console.log(2 ** 4)
console.log(3.14 ** 3.14)
console.log(7 % 2)
// % yra liekana
console.log(13 % 5)
// dvi sveikosios ir 3 lieka
console.log(13 % 14)
//0 sveiku ir 1 lieka

console.log('-------')
let pinigineAfter = 0;
console.log('Pinigine:', pinigineAfter++);
console.log('Pinigine:', pinigineAfter++);
console.log('Pinigine:', pinigineAfter++);
console.log('Pinigine:', pinigineAfter++);
console.log('Pinigine:', pinigineAfter++);

console.log('-------')
let pinigineBefore = 0;
console.log('Pinigine:', ++pinigineBefore);
console.log('Pinigine:', ++pinigineBefore);
console.log('Pinigine:', ++pinigineBefore);
console.log('Pinigine:', ++pinigineBefore);
console.log('Pinigine:', ++pinigineBefore);

console.log('-------')
let skolaAfter = 0;
console.log('skola:', skolaAfter--);
console.log('skola:', skolaAfter--);
console.log('skola:', skolaAfter--);
console.log('skola:', skolaAfter--);
console.log('skolae:', skolaAfter--);

console.log('-------')
let skolaBefore = 0;
console.log('skola:', --skolaBefore);
console.log('skola:', --skolaBefore);
console.log('skola:', --skolaBefore);
console.log('skola:', --skolaBefore);
console.log('skolae:',--skolaBefore);

console.log('-------')
let a = 0;
console.log(a);
a = a + 1;
console.log(a);
a++
console.log(a);
++a
console.log(a);

console.log('-------')
let b = 0;
b = b + 3;
console.log(b);
b++
b++
b++
console.log(b);
b += 3;
console.log(b);
b += 3;
console.log(b);
b += 3;
console.log(b);

console.log('-------')
let c = 16;
const d = 2;
console.log(c);
c /= d;
console.log(c);
c /= d;
console.log(c);
c /= d;
console.log(c);
c /= d;
console.log(c);
// c = c / d

console.log('-------')
let e = 5;
console.log(e);
e %= e;
console.log(e);
