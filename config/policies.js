module.exports.policies = {
    UserController: {

        '*' : 'isLoggedIn',  
        'loginUser': true
    
    },
    ClientsController : {
        '*' : 'isLoggedIn'
    },
    ContractsController : {
        '*' : 'isLoggedIn'
    },
    ProductsController : {
        '*' : 'isLoggedIn'
    },
    ProvidersController : {
        '*' : 'isLoggedIn'
    },
    RoutesController : {
        '*' : 'isLoggedIn'
    },
    FilesController : {
        "*" : 'isLoggedIn'
    }
  };