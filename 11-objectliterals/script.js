//obejct literals
const objetoPessoa = {
    nome: "João",
    idade: 30,
};

console.log(objetoPessoa);
console.log(typeof objetoPessoa);
console.log(objetoPessoa.nome);

//remoendo uma prioriedade de um objeto 
delete objetoPessoa.idade;
console.log(objetoPessoa);

//adicionando uma propiedade ao objeto
objetoPessoa.sobrenome = "Santana";
console.log(objetoPessoa);

//Método Assing

const objeto = {
    nome: "Maria",
    idade: 22,
};

const objeto2 = {
    altura: 1.65,
    gênero: "Feminino",
};

const objetoDestino = {}

Object.assign(objetoDestino, objeto, objeto2);
console.log(objetoDestino);


//método Keys
const chaves = Object.keys(objetoDestino);
console.log(chaves);

//mutação - atribuição 
const hospede = {
    nome: "Alberto",
};

hospede.nome = "Junior";
console.log(hospede.nome);

//mutação - inserção

hospede.sobrenome = "Lima";
console.log(hospede);

//mutação = operador de adição 
const hospedeNovo = {
    nome: "Priscila",
    idade: 42,
};

hospedeNovo.idade += 2;
console.log(hospedeNovo.idade);

//desestruturando objetos 

const usuario = {
    primeiroNome: "Pablo",
    sobrenome: "Xavier",
    profissao:"Pedreiro",
};

const [primeiroNome, sobrenome, profissao] = Object.values();
console.log(primeiroNome, sobrenome, profissao); 


//desestrturar array 

const novoArray = ["Natália", "Eduarda", "Milena"];

const [primeira, segundo, terceiro] = novoArray;
console.log(primeira);
console.log(segundo);
console.log(terceiro); 

//iterandi sobre um array 
const frutasF = ["Morango", "Abacate", "Goiaba"];

for (const cadaFruta of frutasF) {
    console.log(cadaFruta)
}