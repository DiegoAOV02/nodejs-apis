import mysql from 'mysql2'

// Connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs-api'
})

// Check the connection
db.connect((err) => {
  if (err) {
    console.log('Error connecting to the database')
    throw err
  }
  console.log('Connection to the database is established')
})

// Export the connection
export default db
