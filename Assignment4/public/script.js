let submit = document.getElementById('submit')

submit.onclick = function(){
    let task = document.getElementById('task').value
    if(task == ""){
        alert('Enter Task Name')
        return
    }
    let checkBox = document.getElementById("done").checked
    if(checkBox == true){
        done = 'true'
        
    }else{
        done = 'false'
  
    }
    console.log(done)
    addNewTodoJson(task, done)
    getTodoLast()
}

async function getTodoLast(){
    const ul = document.getElementById("list")
    const resp = await fetch('/todos', {method: 'GET'})
    const todos = await resp.json()
    let li = document.createElement("li")
    li.textContent = todos[todos.length - 1].id + " || " + todos[todos.length - 1].task + " || " + todos[todos.length - 1].done
    ul.appendChild(li)
}

async function addNewTodoUrlEncode(task, done){
    const resp = await fetch('/todos',{
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `task=${task}&done=${done}`
    })
}


async function addNewTodoJson(task, done){
    const resp = await fetch('/todos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({task, done})
    })
}