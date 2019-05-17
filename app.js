import express from 'express';

// Set default port
const PORT = 5000;

// Set up the express app
const app = express();

// Root URL
app.get('/', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Server up and running!'
    })
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});