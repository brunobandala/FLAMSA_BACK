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
    "get /cliente/:clientId" : "ClientsController.getClient",

    /** 
    * @author Erick_Ismael_López_Ferrari
    * @description servicios de Contratos
    */
    "post /contratos" : "ContractsController.createContract",
    "get /contratos/:ContractId" : "ContractsController.getContract",

    /** 
    * @author Erick_Ismael_López_Ferrari
    * @description servicios de Productos
    */
    "post /productos" : "ProductsController.createProduct",
    "get /productos/:ProductId" : "ProductsController.getProduct",

    /** 
    * @author Erick_Ismael_López_Ferrari
    * @description servicios de Proveedores
    */
    "post /proveedores" : "ProvidersController.createProvider",
    "get /proveedores/:ProviderId" : "ProvidersController.getProvider",

    /** 
    * @author Erick_Ismael_López_Ferrari
    * @description servicios de Rutas
    */
    "post /rutas" : "RoutesController.createRoutes",
    "get /rutas/:RouteId" : "RoutesController.getRoutes",
    
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
    "post /login" : "UserController.loginUser"

};
