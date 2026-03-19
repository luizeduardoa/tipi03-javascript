const btn = document.querySelector("#meu-botao");;

btn.addEventListener("click", function(){
    console.log("Clicou!");
})

//adicionando evento

const segundobtn = document.querySelector("#com-evento");

function imprimirMensagem(){
    console.log("Teste");
}

segundobtn.addEventListener("click", imprimirMensagem);

//removendo evento

const terceitobtn = document.querySelector("#remove-evento");

terceitobtn.addEventListener("click", () => {
    console.log("Eveno removido");
    segundobtn.removeEventListener("click", imprimirMensagem)
})

//objeto o evento 

const meuTitulo = document.querySelector("#meuTitulo");

meuTitulo.addEventListener("click", (e) =>{
    console.log(e);
    console.log(e.offsetX);
})

//removendo o evento padrão -preventDefault

const a = document.querySelector("a");

a.addEventListener("click", (e) =>
{
    e.preventDefault();
    console.log("Não vai para a página do Google");
})

//evento focus 

const input = document.querySelector("#meu-input");

input.addEventListener("focus", (event) => {
    console.log("Entrou no input");
});

//evento blur 
input.addEventListener("blur", (event) =>{
    console.log("Saiu do input");   
});

//load

window.addEventListener("load", () =>{
    console.log("A página foi carregada!");
});

//beforeunload
/*
window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
});
*/

//Evento keydow

const campo = document.getElementById("campo");

campo.addEventListener("keydown", (e) =>{
    console.log("KeyDown:", e.key);
});

//Evento keyup 
campo.addEventListener("keyup", (e) =>{
    console.log("KeyUp", e.key);
});

//pegando uma tecla específica
campo.addEventListener("keydown", (e) =>{
    if (e.key === "Enter"){
        console.log("Ebter pressionada")
    }
});


//outros eventos de mouse
const eventosMouse = document.querySelector("mouse");

//Mousedown
eventosMouse.addEventListener("mousedown", () => {
    console.log("Pressionou o botão");
});

//Mouseup
eventosMouse.addEventListener("mouseup", () => {
    console.log("Soltou o botão do mouse");
});

//dbclick - dupko click no mous 
eventosMouse.addEventListener("dbclick", () =>{
    console.log("Duplo click");
});