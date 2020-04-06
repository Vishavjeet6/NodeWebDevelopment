const express = require('express')
const app = express()

app.use(express.urlencoded({encoded: true}))
app.use(express.json())

let todos = [
    {task: 'Learn Node JS', done: false},
    {task: 'Learn SQL', done: false},
    {task: 'Learn HTML and CSS', done: true}
]

app.use('/', express.static(__dirname + '/public'))

app.get('/todos', (req, res) => {
    const resp = todos.map((t, i) => ({
        id: i+1,
        task: t.task,
        done: t.done,
    }))
    res.send(resp)
})

app.get('/todos/:id', (req, res) => {
    if(isNaN(Number(req.params.id))){
        return res.status(400).send({
            error: 'todo id must be an integer'
        })
    }
    const idx = req.params.id - 1
    if(!todos[idx]){
        return res.status(404).send({
            error: 'No todo found with id = ' + idx
        })
    }
    const t = todos[idx]
    res.send({
        id: idx+1,
        task: t.task,
        done: t.done,
    })
})

app.post('/todos', (req,res) => {
    if(typeof req.body.task !== 'string'){
        return res.status(400).send({
            error: 'Task name not provied'
        })
    }
    if(req.body.done === 'true'){
        req.body.done = true
    } else{
        req.body.done = false
    }
    todos.push({   
    task: req.body.task,
    done: req.body.done,
    })
    res.status(201).send({
        success: 'New Task added', id:todos.length
    })
})

app.listen(3232)