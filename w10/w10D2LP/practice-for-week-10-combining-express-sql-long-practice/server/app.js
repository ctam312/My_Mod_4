// Instantiate Express and the application
const express = require("express");
const app = express();

const DATA_SOURCE = "app.db";

const sqlite = require("sqlite3");
const db = new sqlite.Database(DATA_SOURCE, sqlite.OPEN_READWRITE);

// Process environment variables
require("dotenv").config();

// Express using json
app.use(express.json());

// Connect router for trees API
const treesRouter = require("./routes/trees");
app.use("/trees", treesRouter);

app.get("/trees", (req, res, next) => {
	const sql = "SELECT id, name FROM trees ORDER BY height_ft DESC;";
	params = [];

	db.all(sql, params, (err, rows) => {
		res.json(rows);
		next(err);
	});
});

// One color by id
app.get('/trees/:id', (req, res, next) => {
    /**
     * STEP 2A - SQL Statement
     */
    // Your code here
    const sql = 'SELECT * FROM trees WHERE id = ?'
    /**
     * STEP 2B - SQL Parameters
     */
    // Your code here
    const params = [req.params.id]

    /**
     * STEP 2C - Call database function
     *  - return response
     */
    // Your code here
    db.get(sql, params, (err, row) => {
        if (err) {
            next(err)
        } else {
            res.json(row)
        }
    })
});



// Root route
app.get("/", (req, res) => {
	res.json({
		message: "API server is running",
	});
});

// Custom error middleware (triggered via call to next(err))
app.use((err, req, res, next) => {
	console.error(err);
	res.status(400);
	res.json({
		error: err.message,
	});
});

// Custom 404 (path not defined, or next() called without error)
app.use((req, res) => {
	res.status(404);
	res.json({
		error: "not found",
	});
});

// Set port and listen for incoming requests
const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
