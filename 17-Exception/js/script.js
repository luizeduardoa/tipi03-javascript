// Exception

let x = 5;
if(x != 10){
    throw new Error("O valor d x não pode ser diferente de 10");
}

//Try e Catch

try{
    result 
} catch (exception) {
    console.error("ocorreu um erro: " + exception.message);
}

finally{
    console.log("O bloco finally sempre é executado");
}

//apo´s definir result

try{
    let result = 1 + 1;
    console.log(result);
}catch(exception){
    console.error("Ocorreu um erro: " + exception.message);
}
finally{
    console.log("O bloco finally sempre é executado");
}

//assertion - sempre no final do codigo
let y = 5;
console.assert(y === 15, "y não é igual a 15");