const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(80, () => console.log('Static server on http://localhost'));
//for this exercise 4's static files,I've used my portfolio assignment's pages