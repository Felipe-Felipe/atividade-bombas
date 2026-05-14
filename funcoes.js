function alertar(mensagem) {
    alert(mensagem);
}

function acessar() {
    const email = document.querySelector('input[type="email"]');
    const senha = document.querySelector('input[text= "text"]');

    let valido = true;

    [email, senha].forEach((campo) => {
        if (!cqmpo.value.trim()) {
            campo.style.border = "2px solid red";
            valido = false;
        } else {
         campo.style.border = "2px solid green";
        }
});

    if (valido) {
        window.open("index.html", "_self");
    }
    

   

}