'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Servicios destinados a la interacción con Usuarios
*/

var loginUser = async function(user){
    sails.log("starting loginUser");
    var response = await User.findOne({email : user.email, password : user.password});

    if(!response){
        throw new Error("email/password error....");
    }else{
        return response;
    }

}

var createUser = async function(user){
    sails.log("starting createUser method");
    var response = await User.create(user).fetch();
    return response;
    sails.log("createUser method finished!....");
};

var readUser = async function(UserId){
    sails.log("starting getUser method");
    var user = await User.findOne({id : UserId});
    if(!user){
        throw new Error("invalid UserId");
    }else{
        return user;
    }
    sails.log("getUser finished");
};

var updateUser = async function(UserId, data){
    sails.log("starting updateUser method");
    var user = await User.update({id:UserId}).set(data);
    sails.log("updateUser method finished!....");
};

var deleteUser = async function(UserId){
    sails.log("starting deleteUser method");
    var user = await User.destroyOne({id:UserId});
    sails.log("deleteUser finished");

};

module.exports = {
    "createUser" : createUser,
    "readUser" : readUser,
    "updateUser" : updateUser,
    "deleteUser" : deleteUser,
    "loginUser" : loginUser
};