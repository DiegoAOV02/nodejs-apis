/**
 * @api {get} /students Consult the students
 */

class StudentController  {
  constructor() {

  }

  // Method to consult the students
  consult (req, res) {
    res.json({ msg: 'Student consultation from class' })
  }

  // Method to consult the students detail
  consultDetail (req, res) {
    // Get the id from the request parameters
    const { id } = req.params
    // Return the response with the id
    res.json({ msg: `Student ${id} detail consultation from class` })
  }

  // Method to loggin the students
  loggin (req, res) {
    res.json({ msg: 'Student login from class' })
  }

  // Method to update the students
  update (req, res) {
    res.json({ msg: 'Student update from class' })
  }

  // Method to delete the students
  delete (req, res) {
    res.json({ msg: 'Student delete from class' })
  }
}

// Export the controller
export default new StudentController()
