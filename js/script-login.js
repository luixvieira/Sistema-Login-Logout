if(!localStorage.getItem("base-dados")){

    let listaUsuarios = [
      {txtNm:"Diego Furigo",txtCpf:"18384381924", txtEmail:"diego@email.com",txtSenha:"112233"},
      {txtNm:"Luis Henrique",txtCpf:"93640573649", txtEmail:"luiz@email.com",txtSenha:"445566"},
      {txtNm:"Melissa Pereira",txtCpf:"16395736522", txtEmail:"melissa@email.com",txtSenha:"778899"},
    ];
      localStorage.setItem("base-dados", JSON.stringify(listaUsuarios));
    } 
    
    function validaCampos(input1,input2) {
    
      let listaUsuarios = JSON.parse(localStorage.getItem("base-dados"));
    
      const elMsg = document.querySelector(".validar");
      
      for (let x = 0; x < listaUsuarios.length; x++) {
          if((listaUsuarios[x].txtEmail == input1.value) && (listaUsuarios[x].txtSenha == input2.value)){
          if((listaUsuarios[x].txtEmail == input1.value) && (listaUsuarios[x].txtSenha == input2.value)){
    
              localStorage.setItem("usuario-logado", JSON.stringify(listaUsuarios[x]));
    
              const userToken = Math.random().toString(16).substring(2, 5)+Math.random().toString(16).substring(2, 5);
    
              sessionStorage.setItem("token", userToken);
    
             elMsg.setAttribute("class","sucesso");
             elMsg.innerText = "Login realizado com sucesso!";
    
             setTimeout(()=>{
                  elMsg.setAttribute("class","valida");
                  elMsg.innerText = "";
                  window.location.href = "../index.html";
             },5000);
              return false; 
          }
      }
    }
    
      elMsg.setAttribute("class","erro");
      elMsg.innerText = "Nome de usuário ou senha incorretos!";
     
      setTimeout(()=>{
        elMsg.setAttribute("class","valida");
        elMsg.innerText = "";
      },5000);
       return false; 
    }