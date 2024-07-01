console.log('javascript connected')

const listDisplay = document.querySelector(`#listDisplay`)

const displayAllListItems = (arr) => {
    listDisplay.innerHTML = ``
        arr.forEach((el) => {
            const listCard = document.createElement('section')

            listCard.innerHTML = `
            <p>${el.name}</p>

            <section>
                <button>-</button>
            </section>

            <br/>
            <br/>
            
        <button onclick = "deleteListItem(${el.id})">Delete Me</button>

            <br/>
            <br/>
        `
            listDisplay.appendChild(listCard)
        })
}

const allListItems = () => {
    axios.get('http://localhost:2112/toDoList').then((res) => {
        console.log(res.data)

        displayAllListItems(res.data)
    })
}

const handleSubmit = (event) => {
    event.preventDefault()

    const taskName = document.querySelector('#itemInput')

    const bodyObj = {
        task: taskName.value
    }

    axios.post('http://localhost:2112/newToDo', bodyObj).then((res) => {
        console.log(res.data)
        displayAllListItems(res.data) 
    })
    .catch((err) => {
        console.error('Error posting new task:', err)
    })
}

document.querySelector('ul').addEventListener('submit', handleSubmit)

const deleteListItem = (id) => {
    axios.delete(`http://localhost:2112/toDoList/${id}`).then((res) => {
        console.log(res.data)
        displayAllListItems(res.data)
    })
}

allListItems()