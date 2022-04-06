/*
OBJECT - pamatų pamatas
*/

/*
Kontekstas.
Mokiniai (array):
-mokinys (???):
   - turi varda (string),
   - turi pazymius (array),
   - turi kontaktini asmeni (???):
      - kuris turi varda(string),
      - telefono numeri (number)
*/

/*
NETINKAMAS DUOMENU TIPAS
const students = ['Petras', 'Maryte','Jonas', 'Ona'];
const marks = [[10, 8], [10, 7, 4], [10, 6], [10, 5]];
const contactName = ['P.P.', 'M.M.', 'J.J.', 'O.O.'];
const contactPhone = [111, 222, 333, 444];

const studentIndex = 1;
console.log('Vardas:', students[studentIndex]);
console.log('Pazymiai:', marks[studentIndex]);
console.log('Kontaktinio asmens vardas:', contactName[studentIndex]);
console.log('Kontaktinio asmens tel.:', contactPhone[studentIndex]);
*/
/*
Ne pats geriausias budas
const students = [
    ['Petras', [10, 6], ['P.P.', 111]],
    ['Maryte', [10, 7], ['M.M.', 222]],
    ['Jonas', [10, 8, 9], ['J.J.', 333]],
    ['Maryte', [10, 9], ['M.M.', 444]],

];

const index = 1;
const student = students[index];
const studentName = student[0];
const studentMarks = student[1];
const studentContactPerson = student[2];
const contactName = studentContactPerson[0];
const contactPhone = studentContactPerson[1];

console.log('Student name:', studentName);
console.log('Marks:', studentMarks);
console.log('Contact:', studentContactPerson);
console.log('Contact name:', contactName);
console.log('Contact phone:', contactPhone);
*/

const students = [
    {
        name: 'Petras',
        marks: [10,6],
        contact: {
            name: 'P.P.',
            phone: 111,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    
    },
    {
        name: 'Maryte',
        marks: [10,7],
        contact: {
            name: 'M.M.',
            phone: 222,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    {
        name: 'Jonas',
        marks: [10,8,9],
        contact: {
            name: 'J.J.',
            phone: 333,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    {
        name: 'Ona',
        marks: [10,7,7],
        contact: {
            name: 'O.O.',
            phone: 444,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
];

const studentIndex = 1;
const student = students[studentIndex];
const name = student.name;
const marks = student.marks;
const contact = student.contact;
const contactName = student.contact.name;
const contactPhone = student.contact.phone;
const contactCity = student.contact.address.city;

/*
ilgesne versija
const studentIndex = 0;
const student = students[studentIndex];
const name = student['name'];
const marks = student['marks'];
const contact = student['contact'];
const contactName = contact['name'];
const contactPhone = contact['phone']
*/

console.log(name);
console.log(marks);
/*console.log(contact);*/
console.log(contactName);
console.log(contactPhone);
console.log(contactCity);


/*
Basically: Array = automatic ,Object = mechanical
*/

/*
array tik [], bet ojbektas gali buti taskas .
*/