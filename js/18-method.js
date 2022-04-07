/*
NUMBER
*/
//skaiciaus konvertavimas i stringa
//Same, bet antras efektivesnis
console.log((1234).toString());
console.log('' + 1234);

//Kiek nori, kad butu po kablelio (suapvalina ir nukerta)(grazina stringa). desimtaines daliesnukirtimas
console.log((3.1415).toFixed(0));
console.log((3.1415).toFixed(1));
console.log((3.1415).toFixed(2));
console.log((3.1415).toFixed(3));
console.log((3.1415).toFixed(4));
console.log(typeof (3.1415).toFixed(0));
//galbut prioretetas butu sitam
console.log(parseFloat('17.53'));
console.log(typeof parseFloat('17.53'));

//is stringo konvertavimas i skaiciu
console.log(parseInt('17.53'));
console.log(typeof parseInt('17.53'));
//casting
console.log(+'17.53'); 


console.log(parseFloat('labas'));
console.log(parseInt('labas'));
console.log(+'labas'); 

console.log(parseFloat('labas17.53'));
console.log(parseFloat('labas17.53labas'));
console.log(parseInt('labas17.53'));
console.log(parseInt('labas17.53labas'));

console.log('Math class');
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.abs(-7));

console.log('apvalinimas')
console.log(Math.round(1.49999));
console.log(Math.round(1.5));
console.log(Math.round(1.0001));
console.log(Math.round(1.9999));
//mazins
console.log(Math.floor(1.49999));
console.log(Math.floor(1.5));
console.log(Math.floor(1.0001));
console.log(Math.floor(1.9999));
//didins
console.log(Math.ceil(1.49999));
console.log(Math.ceil(1.5));
console.log(Math.ceil(1.0001));
console.log(Math.ceil(1.9999));

console.log('random skaicius: [0..1]');
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log('min-max')
console.log(Math.min(1, 5, 7, -4, 3));
console.log(Math.max(1, 5, 7, -4, 3));
//nepatinka masyvas
console.log(Math.min([1, 5, 7, -4, 3]));
console.log(Math.max([1, 5, 7, -4, 3]));

// kas yra trunc???
console.log(Math.trunc());

/*
STRING
*/

const labas = 'Labas rytas, Lietuva!'

console.log(labas.length);

// ar stringe yra sub stringas
console.log(labas.includes('y'));
console.log(labas.includes('rytas'));
console.log(labas.includes('rytas '));
console.log(labas.includes('x'));

//kur stringe yra sub stringas (jei neranda bus (-1))
console.log(labas.indexOf('y'));
console.log(labas.indexOf('rytas'));
console.log(labas.indexOf('rytas '));
console.log(labas.indexOf('x'));
console.log(labas.indexOf('L'));
console.log(labas.indexOf('L', 1));

console.log('"sukarpyti" stringa i dalis');
console.log(labas.split(' '));
console.log(labas.split('a'));
console.log(labas.split('!'));
console.log(labas.split('L'));

//kartojimas
console.log('Steve'.repeat(3));
console.log('Steve '.repeat(3) + '!');
console.log('a'.repeat(20));

console.log(labas.charAt(2));
console.log(labas[2]);

console.log(labas.slice(6, 11));
console.log(labas.slice(7, 19));
console.log(labas.slice(labas.indexOf('r')));

console.log(labas.slice(labas.indexOf('r'), labas.indexOf('s')));

console.log('teksto konvertavimas');
console.log(labas.toLowerCase());
console.log(labas.toUpperCase());

// tekslo apvalimas nuo tarpu
console.log('      Labas      rytas!    '.trimStart() + '.');
console.log('      Labas      rytas!    '.trimEnd() + '.');
console.log('      Labas      rytas!    '.trim() + '.');
console.log('Elon Musk'.trim() + '.');
console.log('      Username    '.trim() + '.');
console.log('      Elon Musk    '.trim() + '.');

console.log('replace');
console.log(labas.replace('rytas', 'vakaras'));
// replacas dirba tik viena karta
console.log(labas.replace('a', '_'));
// replaceAll veikia ant visu
console.log(labas.replaceAll('a', '_'));
// sablonine sintakse, kaip ieskoti, ko ieskoti REGEX turi saugumo spragu
console.log(labas.replace(/a/gi, '_'));

/*
BOOLEAN
*/
console.log(true.toString());

/*
ARRAY
*/

console.log('---------------------------------')

const rytas = ['Labas', 'rytas', 'Lietuva'];
console.log('sujungti')
console.log(rytas.join(' '));
console.log(rytas.join(', '));
console.log(rytas.join('-=-'));

console.log('paieska');
console.log(rytas.includes('a'));
console.log(rytas.includes('rytas'));
console.log(rytas.includes('Rytas'));

console.log(rytas.indexOf('a'));
console.log(rytas.indexOf('rytas'));
console.log(rytas.indexOf('Rytas'));
console.log(rytas.indexOf('Lietuva'));
console.log(rytas.indexOf('Labas'));

console.log(rytas.push('PUSH'))
console.log(rytas);
console.log(rytas.unshift('UNSHIFT'))
console.log(rytas);
console.log(rytas.pop());
console.log(rytas);
console.log(rytas.shift());
console.log(rytas);

console.log('reverse');
console.log(rytas.reverse());

// conCat???
//map, filter, sort, reduce, every, flat, forEach
const marks = [10, 2, 8, 4, 6];
console.log('---map - individualiu reiksmiu konvertavimas---');
console.log(marks.map(item => item));
console.log(marks.map(item => 2* item));
console.log(marks.map(item => item % 3));
console.log(marks.map(item => item - 0.5 ));

console.log('---filter---');
console.log(marks.filter(item => item));
console.log(marks.filter(item => item > 5));
console.log(marks.filter(item => item <= 5));
console.log(marks.filter(item => item > 5 && item % 3 === 0));

console.log('---reduce - sutraukia visas reiskiams i vieta reiksme---');
console.log(marks.reduce((total, item) => total + item, 10000));
console.log(marks.reduce((total, item) => total + item, 0));
console.log(marks.reduce((total, item) => total + item));
//daugybos atveju turi buti 1
console.log(marks.reduce((total, item) => total * item, 1));
console.log(marks.reduce((total, item) => total * item));
//0 - 10 - 2 - 8 - 4 - 6
console.log(marks.reduce((total, item) => total - item, 0));
//10 - 2 - 8 - 4 - 6
console.log(marks.reduce((total, item) => total - item));

console.log(marks.reduce((total, item) => total / item, 0));
console.log(marks.reduce((total, item) => total / item));

console.log('---sort---');
const nums = [1, 2, 3, 10, 20, 30, 11, 21, 31]
// tarsi lygintu tekstus
console.log(marks.sort());
console.log(nums.sort());
console.log(nums.sort((a, b) => a - b));
console.log(nums.sort((a, b) => b - a));


const texts = ['asd', 'qw', 'asdas', 's'];
console.log(texts.sort());
console.log(texts.sort().reverse());
console.log(texts.sort((a, b) => a.length - b.length));
console.log(texts.sort((a, b) => b.length - a.length));

console.log('---flat---');

const matrix = [
    [1,2, [7, 8]],
    [11, [9, 10], 22],
    [[11, 12], 3, 4],
];
console.log(matrix.flat());
console.log(matrix.flat(2));

console.log('... - spread operator')
console.log(Math.min(1, 5, 7, -4, 10));
console.log(Math.max(1, 5, 7, -4, 10));

const minMax = [1, 5, 7, -4, 10];
console.log(Math.min(...minMax));
console.log(Math.max(...minMax));

const m1 = [1, 2];
const m2 = [3, 4];
const m3 = [5, 6];
const m123 = [...m1, ...m2, ...m3];
const m132 = [...m1, ...m3, ...m2];
const m321 = [...m3, ...m2, ...m1, 321];
console.log(m123);
console.log(m132);
console.log(m321);

/*
OBJECT
*/
//OBJECT NETURI METODU
console.log('-------------------------')

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    car: 'Tesla'
}

console.log(person)

console.log(person.name)
console.log(person.age)
console.log(person.isMarried)

console.log(person['name'])
console.log(person['age'])
console.log(person['isMarried'])

console.log('automatinis visu objectu raktazodziu istraukimas');
const personKeys = Object.keys(person);
console.log(personKeys);

console.log('automatinis visu objectu reiksmiu istraukimas');
for (const key of personKeys) {
    console.log(key, ':', person[key]);
}
// eina tik per objektus
console.log('FOR-IN');
for (const key in person) {
    console.log(key, ':', person[key]);
}

console.log('... - spead operator (naudojimas objekte)');
console.log({...person});
console.log({...person, bike: 'TESLA'});
console.log({color: 'red', ...person});
console.log({...person, isMarried: false});
// paskutinis teiginys laimi
console.log({isMarried: false, ...person});

const objA = {
    a: 'a',
    c: 'c',
    b: 'bbbbbb'
}

const objB = {
    b: 'b',
    d: 'd'
}

const objAB = {...objA, ...objB};
const objBA = {...objB, ...objA};
console.log(objAB);
console.log(objBA);

/*
destrukturizavimas
*/
console.log('-----destrukturizavimas-----');
//sunkiau
const skaiciai = [10, 2, 8, 6, 4, 2, 8, 6, 4];
const pirmasSkaicius = skaiciai[0];
const antrasSkaicius = skaiciai[1];
console.log(pirmasSkaicius, antrasSkaicius)

//lengviau 
const [pirmas, antras, trecias, ...kita] = skaiciai;
console.log(pirmas, antras, trecias, kita);

const [xx1, ...xxx] = skaiciai;
console.log(xx1, xxx);

const skaiciai2 = [9999];
const [xx2, ...xxxx] = skaiciai2;
console.log(xx2, xxxx);

const car = {
    name: 'Tesla',
    model: 'X',
    color: 'red'
}

const carName = car.name;
const carModel = car.model;
const carColor = car.color;
console.log(carName, carModel, carColor);

const { name, color, model } = car;
console.log(name, color, model);

console.log('----random----');

const random = Math.floor(Math.random() * 10);  //[0..9]
console.log(random);

console.log('----random number-----')
const nuo = 10;
const iki = 19;
const randomNuoIki = nuo + Math.floor(Math.random() * (iki - nuo + 1));
console.log(randomNuoIki);

for (let i=0; i<20; i++) {
    const nuo = 6;
    const iki = 13;
    const randomNuoIki = nuo + Math.floor(Math.random() * (iki - nuo + 1));
console.log(randomNuoIki);
}


console.log('----random number-----')

function randomNumber(nuo, iki) {
    return nuo + Math.floor(Math.random() * (iki - nuo + 1));
}
for (let i = 0; i < 20; i++) {
    console.log(randomNumber(0, 20));
}