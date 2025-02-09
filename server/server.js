// //Import packages and files
import express from "express"
import cors from "cors"


let mockData = [
    {
       "id": 1,
        "task": 'Buy Groceries'
    },
    {
        "id": 2,
        "task": 'Walk the dog'
    },
    {
        "id": 3,
        "task": 'Save the cheerleader' //Heroes reference is baller!
    },
    {
        "id": 4,
        "task": 'Save the world'
    },
]
    let globalId = 5
    

// //Setup express instance
const app = express()

// //Setup middleware
app.use(express.static('src'))
app.use(express.json())
app.use(cors())

// //ENDPOINTS GO HERE
app.get(`/toDoList`, (req, res) => {
    res.send(mockData)
})

app.post(`/newToDo`, (req, res) => {
    const newListItem = {
        id: globalId,
        task: req.body.itemList,
    }
    mockData.push(newListItem)
    globalId++

    res.send(mockData)
})

app.delete(`/toDoList/:id`, (req, res) => {
    console.log("PARAMS", req.params)

    const idToDelete = +req.params.id
    
    mockData = mockData.filter((el) => el.id != idToDelete)

    res.send(mockData)
})

// //Open sever using app.listen

app.listen(2112, () => console.log('Server running at http://localhost:2112'))
