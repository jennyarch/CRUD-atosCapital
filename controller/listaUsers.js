import { userService } from "../service/userService.js";

const criaNovaLinha = (id, name, email, gender) => {
  const linhaNovoUser = document.createElement('tr');
  const conteudo = `
    <td data-id>${id}</td>
    <td >${name}</td>
    <td >${email}</td>
    <td >${gender}</td>
    <td>
      <ul>
        <li>
          <a href="../pages/atualizaUser.html?id=${id}" >
            <i class="fa-solid fa-pen-to-square"></i>
          </a>
        </li>
        <li>
          <button type="button" class="botaoExcluir">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </li>
      </ul>
    </td>
  `
  linhaNovoUser.innerHTML = conteudo
  linhaNovoUser.dataset.id = id
  return linhaNovoUser
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click' , async (evento) => {
  let botaoDelete = evento.target.className === 'fa-solid fa-trash-can'
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
      tabela.appendChild(criaNovaLinha(elemento.id, elemento.name, elemento.email, elemento.gender))
    });
  }
  catch(erro){
    console.log(erro)
  }
}
render()