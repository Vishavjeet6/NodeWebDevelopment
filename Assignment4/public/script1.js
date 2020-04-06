window.onload = async function(){
    const ul = document.getElementById("list")
    const resp = await fetch('/todos', {method: 'GET'})
    const todos = await resp.json()
    for(let i=0; i<todos.length; i++){
        let li = document.createElement("li")
        li.textContent = todos[i].id + " || " +  todos[i].task + " || " + todos[i].done
        ul.appendChild(li)
    }  
}