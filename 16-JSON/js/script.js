const pessoa = {
    nome: "Maria",
    idade: 30,
    profissao: "Desenvolvedora"
}

const stringJSON = JSON.stringify(pessoa);
console.log(stringJSON);


const pessoa2 = JSON.parse(stringJSON);
console.log(pessoa2); 

const meuJson = `{
    "nome": "Junior",
    "idade": 21, 
    "skills": ["HTML", "CSS", "Javascripy"]
}`;

console.log(meuJson);
console.log(typeof meuJson);


//String JSON para Objeto
const meuObjeto = JSON.parse(meuJson);

console.log(meuObjeto);
console.log(meuObjeto.nome);
console.log(typeof meuObjeto);


//Objeto para String JSON
const jsonstring = JSON.parse(meuJson);
console.log(jsonstring);
console.log(typeof jsonstring);

//Errp de Sintaxxe = JSON Inválido

const invalidoJSON = `{
"nome": Junior,
"idade": 21 
}`;

const meuObjetoOnvalido = JSON.parse(invalidoJSON);