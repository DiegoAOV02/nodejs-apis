/**
 * @api {get} /courses Consult the courses
 */

class CoursesController {
  constructor() {

  }
  
  // Method to consult the courses
  consult (req, res) {
    res.json({ msg: 'Courses consultation from class' })
  }

  // Method to consult the courses detail
  consultDetail (req, res) {
    res.json({ msg: 'Courses detail consultation from class' })
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
