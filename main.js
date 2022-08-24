

document.querySelector('#btn1').addEventListener('click', (e) => {
    completedtodos()
})

function completedtodos() {
    let values = []

    checked = document.querySelectorAll(`input[type="checkbox"]:checked`)

    checked.forEach(chk => {
        values.push(chk.value)
    })
    console.log(values)
}

document.querySelector('#btn2').addEventListener('click', (e) => {
    Uncompletedtodos()
})

function Uncompletedtodos() {
    let values = []

    checked = document.querySelectorAll(`input[type="checkbox"]:not(:checked)`)

    checked.forEach(chk => {
        values.push(chk.value)
    })
    console.log(values)
}

document.querySelector('#btn3').addEventListener('click', (e) => {
    Allcompletedtodos()
})
function Allcompletedtodos() {
    let values = []

    checked = document.querySelectorAll(`input[type="checkbox"]`)

    checked.forEach(chk => {
        values.push(chk.value)
    })
    console.log(values)
}



window.addEventListener('DOMContentLoaded', event => {

    div_todo = document.querySelector('#todos')

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                div_todo.innerHTML +=
                    ` <input type="checkbox" id="${todo.id}" value="${todo.id}" ${todo.completed ? "checked" : ""} /> <label for="${todo.id}"> ${todo.title} </label> <br/>`
            });
        })

        .catch(err => console.error(err))

})