'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Controller con la definición de los servicios de Usuarios
*/

var createUser = async function(req,res){
    sails.log("starting createUser method");
    var User = req.body;
    var response = await UserService.createUser(User);
    return res.json(response);
    sails.log("createUser method finished....");
};

var getUser = async function(req,res){    
    sails.log("starting getUser method");
    var UserId = req.param("UserId");
    var User   = null;
    UserService.readUser(UserId)
    .then(response =>{
        res.json(response);
    })
    .catch(error =>{
        res.conflictException(error);
    });
    sails.log("getUser method finished");
};

var loginUser= async function(req, res){
    sails.log("starting loginUser method");
    UserService.loginUser(req.body)
    .then(response =>{
        sails.log(req.session);
        req.session.userId = response.id;
        res.json(response);
    })
    .catch(error =>{
        res.forbiddenException(error);
    });

    sails.log("loginUser method finished");

}

var logoutUser= async function(req, res){
    req.session.destroy();
    sails.log("logoutUser method finished");
    res.ok();
}

module.exports = {
    "createUser" : createUser,
    "getUser"    : getUser,
    "loginUser"  : loginUser,
    "logoutUser" : logoutUser
};