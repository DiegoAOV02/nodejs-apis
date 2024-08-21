import express from 'express'
const Router = express.Router()

/**
 * Professors route to manage professors, there is no necessary
 * to use the same route name as the file name. We can use
 * 'app.use' to define the route path in the main file.
 */

// Get the professor route
Router.get('/', (req, res) => {
  res.json({ msg: 'Professor consultation' })
})

// Post the professor route
Router.post('/', (req, res) => {
  res.json({ msg: 'Professor post' })
})

// Put the professor route
Router.post('/', (req, res) => {
  res.json({ msg: 'Professor update' })
})

// Delete the professor route
Router.delete('/', (req, res) => {
  res.json({ msg: 'Professor delete' })
})

export default Router
