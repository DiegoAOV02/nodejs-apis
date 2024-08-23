/**
 * @api {get} /courses Consult the courses
 */

// Import the database connection
import db from '../database/db.js'

class CoursesController {
  constructor() {

  }
  
  // Method to consult the courses
  consult (req, res) {
    res.json({ msg: 'Courses consultation from class' })
  }

  // Method to consult the courses detail
  consultDetail (req, res) {
    // Get the id from the request parameters
    const { id } = req.params
    res.json({ msg: `Course ${id} detail consultation from class` })
  }

  // Method to loggin the courses
  loggin (req, res) {
    res.json({ msg: 'Courses login from class' })
  }

  // Method to update the courses
  update (req, res) {
    res.json({ msg: 'Courses update from class' })
  }

  // Method to delete the courses
  delete (req, res) {
    res.json({ msg: 'Courses delete from class' })
  }
}

// Export the controller
export default new CoursesController()
