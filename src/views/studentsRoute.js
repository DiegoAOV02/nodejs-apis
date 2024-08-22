import express from 'express'
import studentController from '../controllers/studentController.js' // Import the student controller
const Router = express.Router()

/**
 * Students route to manage students, there is no necessary
 * to use the same route name as the file name. We can use
 * 'app.use' to define the route path in the main file.
 */

// Get the student route by using the controller
Router.get('/', studentController.consult)

// Post the student route by using the controller
Router.post('/', studentController.loggin)

// All the routes that have the same path will be grouped in this case '/:id'
Router.route('/:id')
  // Get the student detail route by using the controller
  .get(studentController.consultDetail)
  // Put the student update route by using the controller
  .put(studentController.update)
  // Delete the student route by using the controller
  .delete(studentController.delete)

// Export the router
export default Router
