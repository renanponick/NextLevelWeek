import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({massage:'hello World'})
});

export default routes;

/*
// Rota: endereço completo
// Recurso: qual a entidade que estamos acessando do sistema

// GET: Cuscar uma ou mais info. do back-end
// POST: Criar uma nova info. no back-end
// PUT: Atualziar uma info. no back-end
// DELETE: Remover uma info. no back-end

// Request body: parametros para criação e atualização de informações

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];
    response.json(user);
});

app.post('/users', (request, response)=>{
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});
*/