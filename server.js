const restify = require("restify");
const errors = require("restify-errors");

const server = restify.createServer({
    name : "Lojinha",
    version: "1.0.0"
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8001, function(){
    console.log("%s executando em: %s", server.name, server.url)
});

server.get("/", (req, res, next) => {
    res.send("{'resposta': 'Sejam bem-vindos à nossa Lojinha' }")
});

