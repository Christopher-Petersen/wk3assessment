console.log(`javascript connected`)

const listDisplay = document.querySelector(`#listDisplay`)

const displayTheList = (arr) => {
    listDisplay.innerHTML = ``
    arr.ForEach((el) => {
        const listSlot = document.createElement(`section`)

        listSlot.innerHTML = `
        <p> ${el.name}</p>
        
        <section>
            <button>-</button>
            <button>+</button>
        </section>
        
        <br/>
        <br/>
        
`

listDisplay.appendChild(listSlot)})
}

const allItems = () => {
    axios.get('http://localhost:2112/toDoList').then((res) => {
        console.log.log(res.data)

        displayAllItems(res.data)
    })
}

const handleSubmit = (event) => {
    event.preventDefault()

    const itemTask = document.querySelector('#addTask')

    const bodyObj = {
        task: itemTask.value, 
    }

    axios.post('http://localhost:2112/newToDo', bodyObj).then((res) => {
        console.log(res.data)
        displayTheList(res.data)
    })
}

document.querySelector('form').addEventListener('submit', handleSubmit)

const deleteListItem = (id) => {
    axios.delete(`http://localhost:2112/toDoList/${id}`).then((res) => {
        console.log(res.data)
        displayTheList(res.data)
    })
}

allItems()