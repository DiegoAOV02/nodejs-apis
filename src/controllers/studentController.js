class StudentController  {
  constructor() {
     
  }

  consult (req, res) {
    res.json({ msg: 'Student consultation from class' })
  }

  consultDetail (req, res) {
    // Get the id from the request parameters
    const { id } = req.params
    // Return the response with the id
    res.json({ msg: `Student ${id} detail consultation from class` })
  }

  loggin (req, res) {
    res.json({ msg: 'Student login from class' })
  }

  update (req, res) {
    res.json({ msg: 'Student update from class' })
  }

  delete (req, res) {
    res.json({ msg: 'Student delete from class' })
  }
}

export default new StudentController()
