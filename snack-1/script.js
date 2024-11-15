const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

// 1.
// names.forEach((curName) => console.log(curName));

// 2.
const newNames = names.map((curName) => curName);
console.log(newNames);
