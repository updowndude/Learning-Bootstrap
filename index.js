/* @flow */
// by correy winke
// 10/17/16
// makes simle node sever
import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';

// build the static parts
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(`${__dirname}/public/images/favicon.ico`)));

// runs the sever
app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(8080);
