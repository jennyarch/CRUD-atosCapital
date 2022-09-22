import { userService } from "../service/userService.js";

( async () => {
  
  const pegaURL = new URL(window.location)
  const id = pegaURL.searchParams.get('id')

  const inputNome = document.querySelector('[data-nome]')
  const inputEmail = document.querySelector('[data-email]')
  const inputGender = document.querySelector('[data-gender]')
  const inputStatus = document.querySelector('[data-status]')
  try {
    const dados = await userService.detalhaUser(id)
    inputNome.value = dados.name
    inputEmail.value = dados.email
    inputGender.value = dados.gender
    inputStatus.value = dados.status
  }
  catch(erro){
    console.log(erro)
  }

  const formulario = document.querySelector('[data-form]')

  formulario.addEventListener('submit' , async (evento) => {
    evento.preventDefault()
    try {
      await userService.atualizaUser(id, inputNome.value, inputEmail.value, inputGender.value, inputStatus.value)
      alert("Usuario atualizado com sucesso!");
      window.location.href = "../index.html";
    }
    catch(erro){
      console.log(erro)
    }
  })
  
})();