//capturando a tag com ID e colocando em uma variável var
var pElement = document.getElementById("feedback")

//adicionando um listener de evento para receber informações sobre a opinião do usuário
pElement.addEventListener("click",function(){

    let nome = prompt("Informe seu nome")
    let regiao = prompt("Informe sua região")
    let veiculo = prompt("Você utilizou trem, metrô ou ônibus")

    let linha = "", frota = "";

if (veiculo == "trem" || veiculo == "metrô") {
  linha = prompt("Informe a linha:")
} else if (veiculo == "ônibus") {
  frota = prompt("Informe a frota:")
} else {
  alert("Verifique se escreveu a palavra correta e com os acentos corretos.")
}

let nota = prompt("Nos ajude a melhorar! Escreva uma nota de 0 a 10")
let opiniao = prompt("Caso queira, conte para a gente como foi sua experiência")

// Exibindo as informações recebidas no console
console.log(nome + " da região " + regiao + ", utiliza " + veiculo + " da linha/frota " + linha + " " + frota + ". E nos deu nota: " + nota + ". E escreveu: " + opiniao);

})