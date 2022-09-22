import { userService } from "../service/userService.js";

const criaNovaLinha = (id, name, email) => {
  const linhaNovoUser = document.createElement('tr');
  const conteudo = `
    <td data-id>${id}</td>
    <td >${name}</td>
    <td >${email}</td>
    <td>
      <a href="../pages/atualizaUser.html?id=${id}" class="botaoEditar" id="editar">Editar</a>
      <button class="botaoExcluir" id="excluir">Excluir</button>
    </td>
  `
  linhaNovoUser.innerHTML = conteudo
  linhaNovoUser.dataset.id = id
  return linhaNovoUser
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click' , async (evento) => {
  let botaoDelete = evento.target.className === 'botaoExcluir'
  if(botaoDelete){
    try{
      const linhaUser = evento.target.closest('[data-id]')
      let id = linhaUser.dataset.id
      await userService.removeUser(id)
      linhaUser.remove();
    }
    catch(erro){
      console.log(erro)
    }
  }
})
const render = async () => {
  try {
    const listaUsers = await userService.listaUsers()
    listaUsers.forEach(elemento => {
      tabela.appendChild(criaNovaLinha(elemento.id, elemento.name, elemento.email))
    });
  }
  catch(erro){
    console.log(erro)
  }
}
render()