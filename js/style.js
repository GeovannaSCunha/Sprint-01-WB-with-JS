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
// Adicionando eventos e informações ao tópicos de navegação (div)
var b1Element = document.getElementById("nós")

b1Element.addEventListener("click", function(){
    alert("A SmarTech é uma start up focada na implementação da sustentabilidade no cotiadiano do usuário.Utilizamos da tecnologia para implementação de grandes projetos na cidade de São Paulo.") 
    b1Element.style.color = "brown"
})
var b2Element = document.getElementById("sus")

b2Element.addEventListener("click", function(){
    alert("Com a sustentabilidade, podemos suprir as necessidades atuais sem prejudicar o meio ambiente e as futuras gerações. A partir do conceito de desenvolvimento sustentável, pesquisamos formas de aprimorar as técnicas atuais para utilizar dos recursos disponíveis, tendo em consideração a preservação do planeta.") 
    b2Element.style.color = "brown"
})
var b3Element = document.getElementById("tech")

b3Element.addEventListener("click", function(){
    alert("A tecnologia possui um papel importante na sustentabilidade. Podemos usufruir deste recurso para monitoramento do consumo de determinados recursos e pesquisar formas de preservação através da necessidade do usuário. Alguns exemplos da tecnologia na mundo sustentavel são: placas solares, lampadas sensoriais.")
    b3Element.style.color = "brown"
})
