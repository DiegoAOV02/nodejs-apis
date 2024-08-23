/**
 * @api {get} /professor Consultar Professores
 */

// Import the database connection
import db from '../database/db.js'

class ProfessorController {
  constructor() {

  }

  // Method to consult the professors
  consult (req, res) {
    res.json({ msg: 'Professor consultation from class' })
  }

  // Method to consult the professors detail
  consultDetail (req, res) {
    res.json({ msg: 'Professor detail consultation from class' })
  }

  // Method to loggin the professors
  loggin (req, res) {
    res.json({ msg: 'Professor login from class' })
  }

  // Method to update the professors
  update (req, res) {
    res.json({ msg: 'Professor update from class' })
  }

  // Method to delete the professors
  delete (req, res) {
    res.json({ msg: 'Professor delete from class' })
  }
}

// Export the controller
export default new ProfessorController()
