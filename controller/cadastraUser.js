import { userService } from "../service/userService.js";

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit' , async (evento) => {
  evento.preventDefault()
  const nome = evento.target.querySelector('[data-nome]').value
  const email = evento.target.querySelector('[data-email]').value
  const gender = evento.target.querySelector('[data-gender]').value
  const status = evento.target.querySelector('[data-status]').value

  await userService.cadastraUser(nome, email, gender, status)

  alert('Cadastro concluido com sucesso!');
  window.location.href = '../index.html';


})
