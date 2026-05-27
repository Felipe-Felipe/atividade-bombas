import bombas from "./todas_bombas.js";

function alertar(mensagem) {
  alert(mensagem);
}

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
