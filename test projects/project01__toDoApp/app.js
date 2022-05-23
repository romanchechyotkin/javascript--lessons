const todosNode = document.querySelector('.js-todos')
const inputNode = document.querySelector('.js-input')
const btnNode = document.querySelector('.js-btn')
let todos = []

function addTodo(text){
    const todo = {
        text,
        done: false,
        id: `${Math.random()}`
    }
    todos.push(todo)
}

function deleteTodo(id){
    for(let val of todos){
        if(val.id === id){
            val.done = true
        }
    }
}

function render(){
    console.log(todos);
    let html = ''
    for(let val of todos){
        if(val.done){
            return
        }
        else{
            html += `
                <div>
                    ${val.text}
                    <button data-id='${val.id}'>Done</button>
                </div>
            `
        }
    }
    todosNode.innerHTML = html 
}

btnNode.addEventListener('click', () => {
    const text = inputNode.value

    addTodo(text)
    render()
})

todosNode.addEventListener('click', (event) => {
    if(event.target.tagName !== 'BUTTON'){
        return
    }
    const id = event.target.dataset.id  
    deleteTodo(id)
    render()
})

render()