import express from 'express' // Import express
import { PORT } from './config.js' // Import the port from the config file
import studentsRoute from './src/views/studentsRoute.js' // Import the students route
import professorRoute from './src/views/professorsRoute.js' // Import the professor route

// Create the express app
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

// Use the students route
app.use('/students', studentsRoute)

// Use the professor route
app.use('/professors', professorRoute)

// Listening to the port server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
