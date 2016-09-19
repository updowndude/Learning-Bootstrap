require('babel-register');
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(`${__dirname}/public/images/favicon.ico`)));

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(8080);
