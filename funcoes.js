import bombas from "./todas_bombas.js";


//codigos da tela de login
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const form = document.querySelector(".login_form");
let registro_senha = "069817";
let registro_email = "admin@admin";

//codigos da tela do dashboard
const mensagem_inicio = document.querySelector(".mensagem");
const consultador = document.querySelector(".pesquisar_bombas");
const btns_dash = document.querySelectorAll(".btn_dash");
const form_pesquisa = document.querySelector(".buscarbombas");


btns_dash.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    console.log(bombas);
    mudar_dashboard(index);
  });
});



function mudar_dashboard(item) {
  switch (item) {
    case 0:
      mensagem_inicio.style.display = "block";
      consultador.style.display = "none";
      break;
    case 1:
      mensagem_inicio.style.display = "none";
      consultador.style.display = "block";
      break;
  }
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (registro_senha == senha.value && registro_email == email.value) {
      alert("login com sucesso!");
      window.location.href = "bemvindo.html";
    } else {
      alert("dados incorretos");
    }
  });
}

const imgBomba = document.getElementById("imgBomba");
const nomeBomba = document.getElementById("nomeBomba");
const precoBomba = document.getElementById("precoBomba");

form_pesquisa.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = Number(document.getElementById("idBomba").value);

    if (id > 0 && id <= bombas.length) {

        const bomba = bombas[id - 1];

        imgBomba.src = bomba.imagem;
        imgBomba.alt = bomba.bomba;

        nomeBomba.textContent = bomba.bomba;
        precoBomba.textContent = bomba.preço;

    } else {
        alert(`ID inválido. Digite um número entre 1 e ${bombas.length}`);

        imgBomba.src = "";
        nomeBomba.textContent = "";
        precoBomba.textContent = "";
    }
});



