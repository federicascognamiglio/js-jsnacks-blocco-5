const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// 1.
// const names = people.forEach((curPerson) => console.log(curPerson.name));

// 2.
const names = people.map((curPerson) => curPerson.name);
console.log(names);
