'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Controller con la definición de los servicios de Contratos
*/

var createContract = async function(req,res){
    sails.log("starting createContract method");
    var Contract = req.body;
    var userId = req.session.userId;
    var response = await ContractService.createContract(Contract,userId);

    return res.json(response);
    sails.log("createContract method finished....");
};

var getContract = async function(req,res){
    sails.log("starting getContract method");
    var ContractId = req.param("ContractId");
    var Contract   = null;

    ContractService.readContract(ContractId)
    .then(response =>{
        res.json(response);
    })
    .catch(error =>{
        res.conflictException(error);
    });

    sails.log("getContract method finished");
};

var searchContract = async function(req,res){
    sails.log("starting searchContract method");
    var contract = null;

    contract = await ContractService.searchContract(req.body);

    return res.json(contract);

}

module.exports = {
    "createContract" : createContract,
    "getContract" : getContract,
    "searchContract" : searchContract
};