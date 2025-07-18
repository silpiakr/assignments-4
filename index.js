// index.js
const express = require('express');
const router = require('./src/Routes/Api');
const messageRouter = require('./src/Routes/Api');
const app = express();
// const messageRoutes = require('./routes/messageRoutes');

const port = process.env.PORT || 5000;

app.use(express.json());

// Route setup
app.use('/message', router);
app.use('/message', messageRouter);

// GET route
app.get('/', (req, res) => {
  res.send('I am get request.');
});

//  POST route
app.post('/post', (req, res) => {
  res.send('I am post request.');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
