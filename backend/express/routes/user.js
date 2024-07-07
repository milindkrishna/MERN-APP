const express = require('express')
const {getPost,
    post,
    getSinglePost,
    updatepost,
    deletepost} = require('../controller/userconroller')

const router = express.Router()

// get all user and also with query string - ?limit=2
// localhost:6000/api/user or localhost:6000/api/user?limit=1

router.get('/', getPost)

// get single user - localhost:6000/api/user/1
router.get('/:id', getSinglePost)

// create new user localhost:6000/api/user and write inside url-encoded-form

router.post('/', post)


// update user - localhost:6000/api/user/1 

router.put('/:id', updatepost)

// delete user - localhost:6000/api/user/2

router.delete('/:id', deletepost)


module.exports = router