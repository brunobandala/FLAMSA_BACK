module.exports.routes = {

    "get /ping" : "PingController.ping",
    "post /cliente" : "ClientsController.createClient",
    "get /cliente/:clientId" : "ClientsController.getClient"

};
