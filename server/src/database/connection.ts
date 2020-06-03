import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection:{
        //__dirname o caminho para o diretorio de quem esta chamando
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
});

export default connection;