let grades = [9, 10, 8, 2, 1, 9, 0, 6, 7, 3, 8]
console.log("Lista de notas: ", grades)
let media = 8
console.log("Média: ", media)


console.log("Imprime notas acima da média.")
function acimaDaMediaNotas(grades) {

    let resultadoNotas = []

    for (let i = 0; i < grades.length; i++) {
        
        let notas = grades[i]

        if(notas > media) {

            resultadoNotas.push(notas)
        }
    }
    return resultadoNotas
}
console.log(acimaDaMediaNotas(grades))

console.log("Imprime notas na média.")
function notasMedias(grades) {

    let resultadoNotas = []  

    for (let i = 0; i < grades.length; i++) {

        let notas = grades[i]

        if(notas === media) {

            resultadoNotas.push(notas)
        }
    }
    return resultadoNotas
}
console.log(notasMedias(grades))


console.log("Imprime notas abaixo da média.")
function notasAbaixoDaMedia(grades) {

    let resultadoNotas = []  

    for (let i = 0; i < grades.length; i++) {

        let notas = grades[i]

        if(notas < media) {

            resultadoNotas.push(notas)
        }
    }
    return resultadoNotas
}
console.log(notasAbaixoDaMedia(grades))

console.log("Imprime a soma de todas as notas.")
function somaDeTodosOsGraus(grades) {
    
    let resultadoNotas = 0

    for (let i = 0; i < grades.length; i++) {

        let notas = grades[i]

        resultadoNotas += notas
    }

    return resultadoNotas
}
console.log(somaDeTodosOsGraus(grades))

console.log("Imprime a média das notas.")
function mediaDeNotas(grades) {

    let mediaNotas = 0

    for (let i = 0; i < grades.length; i++) {

        let soma = somaDeTodosOsGraus(grades)

        let resultado = soma / 11
        
        mediaNotas = resultado.toFixed(2)
    }

    return Number(mediaNotas)
}
console.log(mediaDeNotas(grades))

console.log("Imprime a maior nota.")
function notaMaxima(grades) {

    let maiorNota = 0

    for (let i = 0; i < grades.length; i++) {

        let notas = grades[i] 

        if (maiorNota < notas) {

            maiorNota = notas
        }
    }
    return maiorNota
}
console.log(notaMaxima(grades))

console.log("Imprime a menor nota.")
function notaMinima(grades) {

    let menorNota = 0

    for (let i = 0; i < grades.length; i++) {

        let notas = grades[i] 

        if (menorNota > notas) {

            menorNota = notas
        }
    }
    return menorNota
}
console.log(notaMinima(grades))