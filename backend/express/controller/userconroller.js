const user = [
    {id: 1, name: 'Milind'},
    {id: 2, name: 'Raj'},
    {id: 3, name: 'Soumili'}
]


const getPost = (req, res) => {
        const limit = parseInt(req.query.limit)
    
        if(!isNaN(limit) && limit > 0) {
            return res.json(user.slice(0, limit))
        } 
        res.json(user)
        //console.log(req.query)
        //res.send({message : 'Hi This is express server'})
        //res.sendFile(path.join(__dirname, 'public', 'index.html'))
}

const getSinglePost = (req, res) => {
    //console.log(req.params.id)
    const id = parseInt(req.params.id)
    // const data = user.filter((user) => user.id === id)
    const data = user.find((user) => user.id === id)
    if(!data) {
        return res.status(404).json({message : `A post with the id ${id} NOT FOUND`})
    } 
    res.status(200).json(data)  
}

const post = (req, res) => {
    // console.log(req.body)

    const newuser = {
        id: user.length+1,
        name : req.body.name
    }

    if(!newuser.name) {
        return res.status(400).json({message : 'please include the title'})
    }

    user.push(newuser)
    res.status(201).json(user)
}

const updatepost = (req, res) => {
    const id = parseInt(req.params.id)
    const data = user.find((user) => user.id === id)
    if(!data) {
        return res.status(400).json({message : `A post with the id ${id} NOT FOUND`})
    } 

    data.name = req.body.name
    res.status(200).json(user)
}

const deletepost = (req, res) => {
    const id = parseInt(req.params.id)
    const data = user.find((user) => user.id === id)
    if(!data) {
        return res.status(400).json({message : `A post with the id ${id} NOT FOUND`})
    } 

    users = user.filter((user) => user.id !== id)
    res.status(200).json(users)
}

module.exports = {
    getPost,
    post,
    getSinglePost,
    updatepost,
    deletepost
}