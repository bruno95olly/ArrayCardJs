"use strict"

const herois = [
    'IronMan - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'SpiderMan - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'CaptainAmerica - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]

const filtrarTitulo = (elementoTitulo) =>{
    const ultimoTraco = elementoTitulo.lastIndexOf("-")

    return elementoTitulo.substring(0, ultimoTraco)
}

const filtrarTexto = (elementoTexto) => {
    const ultimoTraco = elementoTexto.lastIndexOf("-")
    const ultimoPonto = elementoTexto.lastIndexOf(".") + 1

    return elementoTexto.substring(ultimoTraco, ultimoPonto)
}

const criarCard = (elemento) =>{
    const container = document.querySelector(".card-container")
    const novoCard = document.createElement("div")
    novoCard.classList.add("card-herois")
    novoCard.id = filtrarTitulo(elemento)
    novoCard.innerHTML = `
        <h1>${filtrarTitulo(elemento)}</h1>
        <p>${filtrarTexto(elemento)}</p>`
    container.appendChild(novoCard)
}

const carregarCard = (heroisEelemento) => heroisEelemento.forEach(criarCard)

carregarCard(herois)
