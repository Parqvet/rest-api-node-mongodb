import express from 'express';

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// routes
app.get('/', (req, res) => res.send('Hello world'));

export default app;