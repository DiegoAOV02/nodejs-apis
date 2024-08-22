import express from 'express'
import professorController from '../controllers/professorController.js' // Import the professor controller
const Router = express.Router()

/**
 * Professors route to manage professors, there is no necessary
 * to use the same route name as the file name. We can use
 * 'app.use' to define the route path in the main file.
 */

// Get the professor route by using the controller
Router.get('/', professorController.consult)

// Post the professor route by using the controller
Router.post('/', professorController.loggin)

// All the routes that have the same path will be grouped in this case '/:id'
Router.route('/:id')
  // Get the professor route by using the controller
  .get(professorController.consultDetail)
  // Put the professor route by using the controller
  .put(professorController.update)
  // Delete the professor route by using the controller
  .delete(professorController.delete)

export default Router
