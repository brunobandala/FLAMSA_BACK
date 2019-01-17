'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Schema de la entidad Contrato para ORM
*/

module.exports = {

    attributes : {
        providerId : {model : 'provider',required:true, columnName:'provider_id'},
        clientId : {model:'client',required:true,columnName:'client_id'},
        routeId: {model:'route',required:true,columnName:'route_id'},
        productId:{model:'product',required:true,columnName:'product_id'},
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
        description:{type:'string',required:false}

    }

};