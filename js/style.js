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
