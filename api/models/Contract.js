'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Schema de la entidad Contrato para ORM
*/

module.exports = {

    attributes : {
        creationUser : {type : 'json', required:true},
        provider : {type : 'json',required:true},
        client : {type : 'json',required:true},
        route: {type : 'json',required:true},
        product:{type : 'json',required:true},
        providerRate:{type:'number',required:true,columnName:'provider_rate'},
        clientRate:{type:'number',required:true,columnName:'client_rate'},
        utility:{type:'number',required:true},
        accessories:{type:'number',required:true},
        providerBill:{type:'number',required:true,columnName:'provider_bill'},
        flamsaBill:{type:'number',required:true,columnName:'flamsa_bill'},
        cargoDate:{type: 'string', columnType: 'datetime',columnName:'cargo_date',required:false},
        documentsDate:{type: 'string', columnType: 'datetime',columnName:'documents_date',required:false},
        paymentDate:{type: 'string', columnType: 'datetime',columnName:'payment_date',required:false},
        providerBillDate:{type: 'string', columnType: 'datetime',columnName:'provider_bill_date',required:false},
        flamsaBillDate:{type: 'string', columnType: 'datetime',columnName:'flamsa_bill_date',required:false},
        description:{type:'string',required:false},
        status : {type:'string',required:true}
    },customToJSON : function(){
        return sails.config.globals.formatObject(this);
      }
};