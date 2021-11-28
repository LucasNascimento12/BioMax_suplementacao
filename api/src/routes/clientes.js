var express = require("express");
var router = express.Router();

var clientesController = require("../controllers/clienteController");

router.post("/cadastrar", function (req, res) {
    clientesController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    clientesController.entrar(req, res);
});

module.exports = router;