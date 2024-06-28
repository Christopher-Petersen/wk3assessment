let mockData = [
    {
        id: 1,
        task: 'Buy Groceries'
    },
    {
        id: 2,
        task: 'Walk the dog'
    },
    {
        id: 3,
        task: 'Save the cheerleader' //Heroes reference is baller!
    },
    {
        id: 4,
        task: 'Save the world'
    },
]
    let globalId = 5

    const handlerFunctions = {
        getAllListItems: (req, res) => {
            res.send(mockData)
        }
    }

    export default handlerFunctions