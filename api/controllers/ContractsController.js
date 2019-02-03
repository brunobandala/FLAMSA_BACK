'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Controller con la definición de los servicios de Contratos
*/

var createContract = async function(req,res){
    sails.log("starting createContract method");
    var Contract = req.body;
    
    var response = await ContractService.createContract(Contract);

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

module.exports = {
    "createContract" : createContract,
    "getContract" : getContract
};