export default function handler(req, res) {
    // Helper link: https://stackoverflow.com/questions/66739797/how-to-handle-a-post-request-in-next-js
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
  
    const body = JSON.parse(req.body)

    let fname = body.fname;
    let lname = body.lname;
    let email = body.email;
    let phone = body.phone;
    let description = body.description;

    // Helper link: https://kb.objectrocket.com/postgresql/nodejs-and-postgresql-query-example-955
    const {Pool, Client} = require('pg')

    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    })

    // String for the PostgreSQL table name
    const tableName = 'bighappy_co.contact_us'

    // Declare a Template literal string for the SQL statement
    let sqlString = `
    INSERT INTO ${tableName}
    (fname, lname, email, phone, description)
    VALUES
    ($1, $2, $3, $4, $5)`

    // Pass the string and array to the pool's query() method
    pool.query(sqlString, [fname, lname, email, phone, description], (err, resp) => {
    if (err) {
        console.log('pool.query():', err)
        res.status(405).send({ message: 'Failed to submit form.' })
    }
    
    if (resp) {
        console.log('pool.query():', resp)
        res.status(200).send({ message: 'Form submitted successfully.' })
    }
    })

    pool.end()
  }