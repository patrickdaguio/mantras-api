const db = require('./db.json');
const express = require('express');
const app = express();

app.get('/mantras', (req, res) => {
	res.send(db);
});

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on port ${port}...`));
