/*
IF

Sablonai:
- if () {}
- if () {} else {}

Palyginimo operatoriai:
- visi: <, >, <= , >=, ==, != (nera lygu), === (griezta ligybe), !== (griezta neligybe)
- naudotini: <, >, <= , >=, === (griezta ligybe), !== (griezta neligybe)
- NEnaudotini vardan saugumo: ==, != (nera lygu) 

= - priskirimo operatorius
*/

const a = 7;
const b = 5;

//jei yra tinkama salyga if'e as ilysiu i console ir isspausdinsiu kas yra viduje
if (a > b) {
    console.log('A yra daugiau uz B')
}

const c = 2;
const d = 5;

//jei yra tinkama salyga if'e as ilysiu i console ir isspausdinsiu kas yra viduje
if (a > b) {
    console.log('C nera daugiau uz D')
}


const e = 7;
const f = 55;

if (e > f) {
    console.log('text')
} else {
    console.log('no text')
}
