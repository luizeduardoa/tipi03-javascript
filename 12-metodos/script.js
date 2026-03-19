//metodo string: trim

const textxoEspacado = "Essa é uma string com espaços em branco "

const textxoSemEspacado = textxoEspacado.trim();

console.log(textxoSemEspacado);

//método padStart
const numero = "1234";


//preencher com zeros até atingir 8 caracteres
const numeroFormatado = numero.padStart(8, "0");
console.log(numeroFormatado);

const codigo = "ABC";


//Preencher com traços para atingir 5 caracteres
const codigoPreenchido = codigo.padStart(5, "-");
console.log(codigoPreenchido);

//preenchendo no final padEnd
const codigoFinal = codigo.padEnd(5, "-");
console.log(codigoFinal);

//Métoda split - dividir uma string
const textoT = "Essa é uma string para testar split";

//Divide a string em um array de palavras, usando espaços como esparadores

const palavras = textoT.split("");
console.log(palavras);

//Divide uma string em um array de numeros, usando virgulas cmo separadores

const numeros = "1,2,3,4,5".split(",");
console.log(numeros);

//Método join
const listaNumeros = numerosJoin.join();
console.log(listaNumeros);

//Junta os numeros com traçoss como separador
const listaNumerosTracos = numerosJoin.join("-");
console.log(listaNumerosTracos);


//Junta os elementos de um array de strings
const frutas = ["maçã", "banana", "laranja"];
const textoFrutas = frutas.join(" e ");
console.log(textoFrutas);


//metódo repeat 

const tesandoRepeat = "Olá";

//Repetindo a string 3 vezes 
const textoRepetido = tesandoRepeat.repeat(3);
console.log(textoRepetido);