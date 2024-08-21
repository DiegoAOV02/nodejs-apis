import express from 'express'
import { PORT } from './config.js'
import studentsRoute from './src/views/studentsRoute.js'
import professorRoute from './src/views/professorsRoute.js'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

// Use the students route
app.use('/students', studentsRoute)

// Use the professor route
app.use('/professors', professorRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
