const strings = ['caderno', 'copo', 'tigela']

const numeros = [8, 5, 7]

const arrayMisto = ['caderno', 5, true]

const numUnico = [2000]

const vazia = []


//

console.log(strings.length)
console.log(strings[5]);
console.log(arrayMisto.includes(9)) //devolve booleano true/false
console.log(numUnico[0])
console.log(numUnico.length); 

/* const copiaStrings = strings
copiaStrings.push(8)
console.log(strings)
console.log('Cópia de Strings:', copiaStrings) // copiando dessa forma, se altera a copia e o original. */

const copiaStrings = strings.slice();
copiaStrings.push(6)
console.log(strings, copiaStrings) //dessa forma, altera apenas a cópia, que é o que queremos.

copiaStrings.splice(1,2)
console.log(copiaStrings)

console.log('array strings antes da ordenação', strings)
strings.sort()
console.log('array strings depois da ordenação', strings)

console.log('array números antes da ordenação', numeros)
numeros.sort()
console.log('array números depois da ordenação', numeros)




