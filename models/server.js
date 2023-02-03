const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.apiPath = "/api";

        this.connectDatabase();
        this.middlewares();
        this.routes();

    }

    async connectDatabase() {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPath, require('../routes/user'));
        this.app.use(this.apiPath, require('../routes/news'));
        this.app.use(this.apiPath, require('../routes/weather'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Serividor corriendo en el puerto', this.port);
        });
    }

}

module.exports = Server;