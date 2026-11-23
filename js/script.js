
// CRIAR O BOTÃO DE ALTERAR TEMA

const menu = document.querySelector("header nav");

const botaoTema = document.createElement("button");

botaoTema.classList.add("botao-tema");

// Verificar se já existe um tema salvo
if (localStorage.getItem("tema") === "escuro") {

    document.body.classList.add("dark-mode");

    botaoTema.innerHTML = "☀";

} else {

    botaoTema.innerHTML = "☾";

}

// Adicionar o botão ao menu
menu.appendChild(botaoTema);

// Alterar o tema ao clicar
botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        botaoTema.innerHTML = "☀";

        localStorage.setItem("tema", "escuro");

    } else {

        botaoTema.innerHTML = "☾";

        localStorage.setItem("tema", "claro");

    }

});
