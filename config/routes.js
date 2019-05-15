module.exports.routes = {

    /** 
    * @author Erick_Ismael_López_Ferrari
    * @description servicios de Ping
    */
    "get /ping" : "PingController.ping",

    /** 
    * @author Erick_Ismael_López_Ferrari
    * @description servicios de Cliente
    */
    "post /cliente" : "ClientsController.createClient",
    "get /cliente" : "ClientsController.getAllClients",
    "get /cliente/:clientId" : "ClientsController.getClient",

    /** 
    * @author Erick_Ismael_López_Ferrari
    * @description servicios de Contratos
    */
    "post /contratos" : "ContractsController.createContract",
    "get /contratos/:ContractId" : "ContractsController.getContract",
    "post /contratos/search" : "ContractsController.searchContract",
    "put /contratos/:ContractId" : "ContractsController.updateContract",
    "delete /contratos/:ContractId" : "ContractsController.deleteContract",

    /** 
    * @author Erick_Ismael_López_Ferrari
    * @description servicios de Productos
    */
    "post /productos" : "ProductsController.createProduct",
    "get /productos" : "ProductsController.getAllProducts",
    "get /productos/:ProductId" : "ProductsController.getProduct",

    /** 
    * @author Erick_Ismael_López_Ferrari
    * @description servicios de Proveedores
    */
    "post /proveedores" : "ProvidersController.createProvider",
    "get /proveedores" : "ProvidersController.getAllProviders",
    "get /proveedores/:ProviderId" : "ProvidersController.getProvider",

    /** 
    * @author Erick_Ismael_López_Ferrari
    * @description servicios de Rutas
    */
    "post /rutas" : "RoutesController.createRoute",
    "get /rutas"  : "RoutesController.getAllRoutes",
    "get /rutas/:RouteId" : "RoutesController.getRoute",

    /**
    * @author Erick_Ismael_López_Ferrari
    * @description servicios de Tramos
    */
    "post /tramos" : "StretchController.createStretch",
    "get /tramos"  : "StretchController.getAllStretchs",
    "get /tramos/:StretchId" : "StretchController.readStretch",

    /** 
    * @author Erick_Ismael_López_Ferrari
    * @description servicios de Archivos
    */
    "post /files" : "FilesController.uploadFile",

    /** 
    * @author Erick_Ismael_López_Ferrari
    * @description servicios de Usuarios
    */
    "post /user" : "UserController.createUser",
    "get /user/:UserId" : "UserController.getUser",
    "post /login" : "UserController.loginUser",
    "post /logout" : "UserController.logoutUser"

};