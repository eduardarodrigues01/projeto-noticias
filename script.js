const botaoAbrir = document.querySelector("header > button")
const botaoFechar = document.querySelector ("header  nav button")

const body = document.querySelector("body")
const nav = document.querySelector("header .mobile ")

botaoAbrir.addEventListener('click', abrirMenu)
botaoAbrir.addEventListener('click', fecharMenu)


function abrirMenu() {
  body.classList("escurecer")
  nav.classList.add("abrir")
}

function fecharMenu() {
  body.classList.remove("escurecer")
  nav.classList.remove("abrir")
}