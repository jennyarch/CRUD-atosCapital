const url = "https://gorest.co.in/public/v2/users";
const _token = "fa17d5dbcdb6fb378bef1589ad8b27c2912e3e62763b642017937a8e1dd9d593";

function listaUsers(){
  return fetch(url, {
    headers: {
      'Content-Type' : 'application/json',
      'Authorization': `Bearer ${_token}`,
      'x-pagination-limit' : '20'
    },
  })
  .then(resposta => {
    if(resposta.ok){
      return resposta.json()
    }
    throw new Error('Não foi possivel listar os usuarios')
  })
}
function cadastraUser(name, email, gender, status) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
      'Authorization': `Bearer ${_token}`,
      'x-pagination-pages':'250'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      status: status,
      gender: gender
    })
  })
  .then(resposta => {
    if(resposta.ok){
      return resposta.body
    }
    throw new Error('Não foi possivel listar os usuarios')
  })
}
function removeUser(id) {
  return fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${_token}`
      }
  }).then (resposta => {
      if(resposta.ok){
        return resposta.ok
      }
      throw new Error('Não foi possivel remover o usuário')
  })
}
function detalhaUser(id)  {
  return fetch(`${url}/${id}`, {
    headers: {
      'Content-Type' : 'application/json',
      'Authorization': `Bearer ${_token}`
    }
  })
  .then(resposta => {
      if (resposta.ok) {
          return resposta.json()
      }
      throw new Error('Não foi possivel detalhar o usuário')
  })
}
function atualizaUser(id, name, email, gender, status){
  return fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${_token}`
      },
      body: JSON.stringify({
          id: id,
          name: name,
          email: email,
          gender: gender,
          status: status
      })
  })
  .then( resposta  => {
      if(resposta.ok) {
          return resposta.body
      }
      throw new Error('Não foi possivel atualizar o usuário')
  })
}
export const userService = {
  listaUsers,
  cadastraUser,
  removeUser,
  detalhaUser,
  atualizaUser
}
