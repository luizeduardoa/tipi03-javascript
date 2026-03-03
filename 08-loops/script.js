//while (enquanto)

let x = 1;

while (x <= 10){
    console.log(x);
    x = x + 1;
}

let y = 10;
while (y >= 5){
    console.log(y);
    y --;
} 


//do while (fazer enquanto)

let m = 15;

do {
    console.log(`${m}`);
    m = m + 2;
} while (m <= 21);



//comparando while e do while

let n =12;

while(n <= 10){
    console.log(n);
    n++; //incremento 
}

//execua pelo menos 1 vez do loop
do{
    console.log(n);
    n++;
}  while(n <= 10);

//break
let contadors  = 0;

while (contadors < 10){
    console.log("Contador: " + contadors);

// Interrompe o loop se o contador for igual a 5

    if(contadors === 5){
        break;
    }

    contadors++;
    }


// for 

for (i = 1 ; i <= 5; i++) {
    console.log(i);
}

let j = 5;

for(j; j > 2; j--){
    console.log(j);
}


// continue 

for (let k = 1; k <= 7; k++){
    //Pula a impressão do número 5
    if (k === 5) {
        continue;                                                                                                                            
    }

    console.log(k);
} 

// array

const nomes = ["João", "Maria", "José"];

console.log(nomes);
console.log(nomes [0]);
console.log(nomes [1]);
console.log(nomes [2]);
console.log(nomes [3]); // essa posiçaõ não existe (undefined)


    //percorrendo um array com loop for 

    const listNome = ["João", "Maria", "José"];

    for(let p = 0; p < listNome.length; p++){
        console.log(listNome[p]);
    
    }

    //percorrendo um array com loop forEach

    listNome.forEach(function(nome){
        console.log(nome)
    });

    //mais moderno - forEach com arrow fuction

    listNome.forEach(nome => {
        console.log(nome);
    })

    //nome e index com forEach 
    
    listNome.forEach((nome, indice) => {
        console.log(indice, nome);
    })

    