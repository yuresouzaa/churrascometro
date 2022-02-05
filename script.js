// Carne - 400g por pessoa + de 6 horas 600g por pessoa
// Cerveja - 1200ml por pessoa + de 6 horas 2000ml por pessoa
// Refrigerante/agua - 1000ml por pessoa + de 6 horas 1500ml por pessoa

//Crianças valem por 0,5 

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qtdTotalCarne = CarnePP(duracao) * adultos + (CarnePP(duracao)/2 * criancas);
    console.log(qtdTotalCarne)
    let qtdTotalBebida = BebidasPP(duracao) * adultos + (BebidasPP(duracao)/2 * criancas);
    console.log(qtdTotalBebida)
    let qtdTotalCerveja = CervejasPP(duracao) * adultos;
    console.log(qtdTotalCerveja)

    resultado.innerHTML = `<p><img src="./assets/869472.png">${qtdTotalCarne / 1000} Kg de carne </p>`
    resultado.innerHTML += `<p><img src="./assets/737994.png">${Math.ceil(qtdTotalCerveja / 350)} Latas de cerveja</p>`
    resultado.innerHTML += `<p><img src="./assets/refrigerante.png">${Math.ceil(qtdTotalBebida / 2000)} Refrigerante</p>`
}

function CarnePP(duracao) {
    if (duracao >= 6) {
        return 600;
    } else {
        return 400;
    }
}
function CervejasPP(duracao) {
    if (duracao >= 6) {
        return 3500;
    } else {
        return 2450;
    }
}
function BebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}