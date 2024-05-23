let tokenUser = sessionStorage.getItem("token");
if(tokenUser != "" && tokenUser != undefined){ 
    const usuario = JSON.parse(localStorage.getItem("usuario-logado"));
 const nomeExibido = document.querySelector("#user-name");
 nomeExibido.innerText = usuario.txtNm;

 const emailExibido = document.querySelector("#user-email");
 emailExibido.innerText = usuario.txtEmail;

 const senhaExibida = document.querySelector("#user-password");
 senhaExibida.innerText = usuario.txtSenha;

 const cpfExibido = document.querySelector("#user-cpf");
 cpfExibido.innerText = usuario.txtCpf;

 const elLogoutUser = document.querySelector("#logout-button");
 elLogoutUser.addEventListener("click",()=>{
    sessionStorage.removeItem("token");
    localStorage.removeItem("usuario-logado");
    window.location.href = "../login.html";
 });
}
else{
    alert("Algo deu errado, tente novamente.");
}