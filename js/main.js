import BotaoConclui from "./Components/concluiTarefa.js"
import BotaoDeleta from "./Components/deletaTarefa.js"

    const criarTarefa = (evento) => {

        evento.preventDefault()

        const lista = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input]')
        const valor = input.value
        
        const calendario = document.querySelector('[data-form-date]')
        console.log(calendario)

        const tarefa = document.createElement('li')
        tarefa.classList.add('task')
        const conteudo = `<p class"content">${valor}</p>`

        tarefa.innerHTML = conteudo

        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(BotaoDeleta())
        lista.appendChild(tarefa)
        input.value = ""
    }

    const novaTarefa = document.querySelector('[data-form-button]')

    novaTarefa.addEventListener('click', criarTarefa)