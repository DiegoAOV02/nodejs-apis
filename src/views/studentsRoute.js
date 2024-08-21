import express from 'express'
const Router = express.Router()

/**
 * Students route to manage students, there is no necessary
 * to use the same route name as the file name. We can use
 * 'app.use' to define the route path in the main file.
 */

// Get the student route
Router.get('/', (req, res) => {
  res.json({ msg: 'Student consultation' })
})

// Post the student route
Router.post('/', (req, res) => {
  res.json({ msg: 'Student post' })
})

// Put the student route
Router.put('/', (req, res) => {
  res.json({ msg: 'Student update' })
})

// Delete the student route
Router.delete('/', (req, res) => {
  res.json({ msg: 'Student delete' })
})

// Export the router
export default Router
