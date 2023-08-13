let express = require('express');
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'postgre',
  database: 'postgres',
  password: '123456',
  port: 5432,
})

let app = express();
let port = process.env.PORT;
app.get('/ping', function (req, res) {
  res.send('pong');
})
app.get('/users', function (req, res) {
  pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json({ users: results.rows })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
