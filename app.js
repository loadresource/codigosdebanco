function scrollProgres() {
  const progres = document.getElementById('bar')
  const state = document.getElementById('state')
  const scroll = document.body.scrollTop || document.documentElement.scrollTop
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  const scrolled = (scroll / height) * 100

  progres.style.width = scrolled + '%'

  if (scrolled === 0) {
    state.style.display = 'none'
  } else {
    state.style.display = 'block'
  }
}


/*cargar json de los bancos*/
async function listBank() {
  const rest = await fetch('codigos.json')
  const data = await rest.json()

  return data
}

/*ejecucion de la funcion de lista de bancos para agregar los datos al html */
listBank().then((data) => {
  let html = ''
  const listBank = document.getElementById('bank-list')
  const li = document.createElement('li')

  data.forEach((list) => {
    li.textContent = html += `<li><span class ="codigo">${list.codigo}</span> ${list.banco} <img src="${list.logo}"</li>`
  })
  listBank.innerHTML = li.textContent.toUpperCase()
})

/*boton top*/

function scrollFunction() {
  const tope = document.getElementById('top-down')
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    tope.style.display = 'block'
  } else {
    tope.style.display = 'none'
  }
}

function up() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

window.onscroll = function () {
  scrollProgres()
  scrollFunction()
}
