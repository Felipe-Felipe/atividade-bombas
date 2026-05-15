function alertar(mensagem) {
    alert(mensagem);
}

const email = document.getElementById("email")
const senha = document.getElementById("senha")
const form = document.querySelector(".login_form")

let registro_senha = "069817" 
let registro_email = "admin@admin" 


form.addEventListener("submit",(e)=>{
e.preventDefault()
// console.log(email.value);
// console.log(senha.value);

if(registro_senha == senha.value && registro_email == email.value )
{
    alert("login com sucesso!")
    window.location.href = "bemvindo.html"
}
else {
    alert("dados incorretos")
}
})