/*
STRING

Kabutes:
- viengubos (')
- dvigubos ("")
- backtick'as (`)

Testo simboliu kiekis:
.length
*/

const name = 'Petras'
console.log(name);

const lastname = "Petraitis"
console.log(lastname);

const viengubaKabute = "viengubos(')"
console.log(viengubaKabute);

const dvigubaKabute = 'viengubos(")'
console.log(dvigubaKabute);

const viengubakabutes12 = 'Cia yra vienguba (\') ir dviguba (") kabutes12.'
console.log(viengubakabutes12);

const dvigubabakabutes12 = "Cia yra vienguba (') ir dviguba (\") kabutes12."
console.log(dvigubabakabutes12);

const kabutes12 = "Cia yra vienguba (\') ir dviguba (\") kabutes12.";
console.log(dvigubabakabutes12)

const clientName =  'Maryte'
const clientAge = 87;
// Client Maryte is 86 years old.
const clientSentence = 'Client ' + clientName + ' is ' + clientAge + ' years old.';
console.log(clientSentence);

const backtickClient =  `Client ${clientName} is ${clientAge} years old.`;
console.log(backtickClient);

const n1 = 7;
const n2 = 5;
const rez = n1 + n2
// 7 + 5 = 12
// const ats = `${n1} + ${n2} = ${n1 + n2}`;
const ats = `${n1} + ${n2} = ${rez}`;
console.log(ats);
