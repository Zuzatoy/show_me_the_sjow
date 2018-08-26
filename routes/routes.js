const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('/intro')
})

router.get('/intro', (req, res) => {
  res.render('intro', {title: 'intro'})
})

router.get('/signup', (req, res) => {
  res.render('signup', {title: 'signup'})
})

router.post('/signup', (req, res) => {
  console.log(req.body)
  // Get post data
  const name = req.body.name
  const email = req.body.email
  const location = req.body.city

  // Call addNewUser db method - pass post data
  db.addNewUser(name, email, location)
    .then(res.redirect('/'))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


/*router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}) */

module.exports = router
