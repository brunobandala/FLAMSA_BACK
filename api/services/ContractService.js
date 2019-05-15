'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Servicios destinados a la interacción con Contratos
*/

var searchContract = async function(searchContract){    

    var contractQuery = {};
    if(searchContract.bill_flamsa != undefined ){
        contractQuery.flamsaBill = searchContract.bill_flamsa;
    }

    if(searchContract.bill_provider != undefined){
        contractQuery.providerBill = searchContract.bill_provider;
    }

    if(searchContract.provider != undefined && searchContract.provider != ''){
        contractQuery["provider.businessName"] = {'contains' : searchContract.provider};
    }

    if(searchContract.client != undefined && searchContract.client != ''){
        contractQuery["client.businessName"] = {"contains" : searchContract.client};
    }

    if(searchContract.product != undefined && searchContract.product != ''){
        contractQuery["product.name"] = {"contains" :searchContract.product};
    }

    if(searchContract.route != undefined && searchContract.route != ''){
        contractQuery["route.name"] = {"contains" :searchContract.route};
    }

    if(searchContract.user != undefined && searchContract.user != ''){
        contractQuery['creationUser.name'] = {"contains" :searchContract.user};
    }

    var response = await Contract.find({where : contractQuery}).meta({enableExperimentalDeepTargets:true});

    return response;

}

var createContract = async function(contract, userId){
    sails.log("starting createContract method");

    contract.creationUser = await UserService.readUser(userId);

    if(contract.provider != null){
       contract.provider = await ProviderService.readProvider(contract.provider);
    }

    if(contract.client != null){
        contract.client = await ClientService.readClient(contract.client);
    }

    if(contract.route != null){
        contract.route = await RoutesService.readRoute(contract.route);
    }

    if(contract.product != null){
        contract.product = await ProductService.readProduct(contract.product);
    }

    var response = await Contract.create(
        sails.config.globals.formatObject(contract)).fetch();
    return response;
    sails.log("createContract method finished!....");
};

var readContract = async function(contractId){
    sails.log("starting getContract method");
    var contract = await Contract.findOne({id : contractId});
    if(!contract){
        throw new Error("invalid contractId");
    }else{
        return contract;
    }
    sails.log("getContract finished");
};

var updateContract = async function(contractId, data){
    sails.log("starting updateContract method");
    var contract = await Contract.update({id:contractId}).set(data);
    sails.log("updateContract method finished!....");
    return contract;
};

var deleteContract = async function(contractId){
    sails.log("starting deleteContract method");
    var contract = await Contract.destroyOne({id:contractId});
    sails.log("deleteContract finished");
    return contract;

};

module.exports = {
    "createContract" : createContract,
    "readContract" : readContract,
    "updateContract" : updateContract,
    "deleteContract" : deleteContract,
    "searchContract" : searchContract
};
