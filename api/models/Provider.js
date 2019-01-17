'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Schema de la entidad Proveedor para ORM
*/

module.exports = {

    attributes : {
        businessName : {type: 'string', required : true,columnName:"business_name"},
        RFC : {type : 'string', required : true, unique : true},
        fiscalAddress : {type : 'string', required : true,columnName:'fiscal_address'},
        personalContact : {type : 'string', required : true,columnName:'personal_contact'},
        contact : {type : 'string', required : true},
        creditDays : {type : 'number', defaultsTo : 0,columnName:'credit_days'},
        details : {type : 'string', required : false}
    }

};