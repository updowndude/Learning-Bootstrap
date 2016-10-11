/* @flow */
// import 'babel-register';
import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(`${__dirname}/public/images/favicon.ico`)));

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(8080);
