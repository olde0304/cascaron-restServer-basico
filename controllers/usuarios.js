const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
    const { q, nombre, apikey } = req.query;
    res.json({
        // res.send('Hello World')
        msg: "get API - controlador",
        q, 
        nombre, 
        apikey,
    });
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        // res.send('Hello World')
        msg: "post API - controlador",
        nombre,
        edad,
    });
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        // res.send('Hello World')
        msg: "put API - controlador",
        id,
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        // res.send('Hello World')
        msg: "patch API - controlador",
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        // res.send('Hello World')
        msg: "delete API - controlador",
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete,
}