let nome , nota1 , nota2 , media 

function clique() {
            nome = prompt("Nome do aluno")
            nota1 = parseFloat(prompt("Sua primeira nota: "))
            nota2 = parseFloat(prompt("Sua segunda nota: "))
            media = (nota1 + nota2) / 2
            if (media <= 5) {
            let final = 'Reprovado'
        }   else if (media >= 3 && media <= 6){
            let final = 'recuperacao'        }
            else {
            let final = 'Aprovado' }
        document.write(`<p>nota de fulano e ${final}</p>`)
        }


