const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express()
        this.PORT = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.middleware();
        //Rutas de mi aplicacion
        this.routes();
    }

    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log('Servidor corriendo en el puerto', this.PORT);
        });
    }

}

module.exports = Server;