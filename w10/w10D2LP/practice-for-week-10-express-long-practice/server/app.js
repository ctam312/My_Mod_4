const express = require('express');
require('express-async-errors');
const app = express();

const DATA_SOURCE = 'app.db';

const sqlite =  require('sqlite3')
const db = new sqlite.Database(
    DATA_SOURCE,
    sqlite.OPEN_READWRITE
)

app.use(express.static('assets'))
app.use(express.json())

app.get('server/routes/trees.js', (req, res, next) => {
  const sql = 'SELECT id, name FROM trees
  ORDER BY '
})

app.use('/', (req,res) => {
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`)
  res.on('finish', () => {
    console.log(res.statusCode)
  })
})

// For testing purposes, GET /
app.get('/', (req, res) => {
  res.json("Express server running. No content provided at root level. Please use another route.");
});


// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  console.log(req.body)
  res.json(req.body);
  next()
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  throw new Error("Hello World!")
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));