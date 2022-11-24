const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/user')
router.get('/user', usercontroller.index)
let users = [
  {id: 1, nama: "fafaa", email: "fafacantik@gmail.com"},
  {id: 2, nama: "gupi", email: "gupicantik@gmail.com"},
  {id: 3, nama: "sam", email: "sulleyvans@gmail.com"}
]


router.get('/users', usercontroller.index )

router.get('/user/:id', usercontroller.index )

  router.post('/user', usercontroller.store)
  
  router.put('/user/:id', usercontroller.update)
  
  router.delete('/user/:id', usercontroller.delete)

  module.exports =router
  