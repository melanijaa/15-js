/*
Visi mokiniai turi TIK 4 pazymius ir reikia suskaiciuoti vidurti.
*/

const petras = [10, 4, 8, 2];
const maryte = [5, 9, 7, 6];
const jonas = [7, 7, 8, 2];
const ona = [1, 5, 7, 10];

/*
console.log('not the best way of doing it')
let petroSuma = 0;
petroSuma += petras [0];
petroSuma += petras [1];
petroSuma += petras [2];
petroSuma += petras [3];
const petroKiekis = petras.length;
const petroVidurkis = petroSuma / petroKiekis;
console.log('Petras:', petroVidurkis);

let maryteSuma = 0;
maryteSuma += maryte [0];
maryteSuma += maryte [1];
maryteSuma += maryte [2];
maryteSuma += maryte [3];
const maryteKiekis = maryte.length;
const maryteVidurkis = maryteSuma / maryteKiekis;
console.log('Maryte:', maryteVidurkis);

let onaSuma = 0;
onaSuma += ona [0];
onaSuma += ona [1];
onaSuma += ona [2];
onaSuma += ona [3];
const onaKiekis = ona.length;
const onaVidurkis = onaSuma /onaKiekis;
console.log('Ona:', onaVidurkis);
*/

console.log('better way of doing it')
function vidurkis(pazymiusum) {
    let pazymiusum = 0;
    pazymiusum += pazymiusum [0];
    pazymiusum += pazymiusum [1];
    pazymiusum += pazymiusum [2];
    pazymiusum += pazymiusum [3];
    return pazymiusum / pazymiuSarasas.length;
}

const petroVidurkis = vidurkis(petras);
console.log('Petras:', petroVidurkis)

const maryteVidurkis = vidurkis(maryte);
console.log('Maryte:', maryteVidurkis)

const jonasVidurkis = vidurkis(jonas);
console.log('Jonas:', jonasVidurkis)

const onaVidurkis = vidurkis(ona);
console.log('Ona:', onaVidurkis)

/*
Funkcija gauna varda ir turi grazinti sakini:
"Vardo pirma raide yra [V] ir vardas sudarytas is [5] raidziu."
*/

function vardoAnalize(name) {
    return `Vardo "${name}" pirma raide yra ${name[0]} ir vardas sudarytas is ${name.length} raidziu.`;
}

const petroVardas = vardoAnalize('Petras');
console.log(petroVardas);

const marytesVardas = vardoAnalize('Maryte');
console.log(marytesVardas);

const onosVardas = vardoAnalize('Ona');
console.log(onosVardas);

/*
Funkcija gauna du skaicius ir turi grazinti lygti su sprendimu, pvz.:
2 + 2 = 4
*/

function suma(a, b) {
    return `${a} + ${b} = ${a + b}`;
}

const s1 = suma(2, 3);
console.log(s1);

const s2 = suma(0.1, 0.2);
console.log(s2);

const s3 = suma(-88, -11);
console.log(s3);