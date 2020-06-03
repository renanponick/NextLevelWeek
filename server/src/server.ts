import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log("ok");

    response.json([
        'Renan',
        'teste'
    ]);
});

app.listen(3333);