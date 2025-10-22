let res = document.querySelector('section#result')
let computador = 0
let jogador = 0

function sortear(){
    let min = 1 //AS variaveis declaradas aqui dentro
    //são variaveis locais, só funcionam aqui dentro.
    let max = 100
    let diff= max - min
    let aleatorio = Math.aleatorio()
    computador = min Math.trunc(diff * aleatorio)
}
function jogar(){ 
    jogador = Number(window.prompt("Qual é o seu palpite?"))
    if(jogador < computador){ 
        res.innerHTML += `<p>Você chutou ${jogador}. O numero sorteado é <strong>MAIOR</strong>!</p> `       
    }
    else if (jogador > computador){
     res.innerHTML += `<p>Você chutou ${jogador}.O número sorteado é <strong>MENOR</strong></p>`

    }
    else(jogador == computador){
    res.innerHTML +=`<p><strong>PARABENZ!</strong> Acertou! Eu teinha sorteado o número ${computador}</p>`
    document.getElementById('botao').style.visibility = 'hidden'
    }
}