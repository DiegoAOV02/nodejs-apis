class ProfessorController {
  constructor() {

  }

  consult (req, res) {
    res.json({ msg: 'Professor consultation from class' })
  }

  consultDetail (req, res) {
    res.json({ msg: 'Professor detail consultation from class' })
  }

  loggin (req, res) {
    res.json({ msg: 'Professor login from class' })
  }

  update (req, res) {
    res.json({ msg: 'Professor update from class' })
  }

  delete (req, res) {
    res.json({ msg: 'Professor delete from class' })
  }
}

export default new ProfessorController()
