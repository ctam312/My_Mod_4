const express = require('express');

// Create the Express app.
const app = express();

app.get('/status', (req, res) => {
    res.send('Weiner from the app!')
})

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}`))