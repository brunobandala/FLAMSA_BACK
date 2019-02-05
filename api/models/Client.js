'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Schema de la entidad Cliente para ORM
*/

module.exports ={

    attributes :{
        businessName:{type:'string',required:true},
        RFC : {type:'string', required : true, unique : true},
        fiscalAddress: {type : 'string', required: false},
        officeAddress: {type : 'string', required: false},
        principalContact: {type : 'string', required: false},
        seccondaryContact: {type : 'string', required: false},
        paymentProcessFilename : {type : 'string', required: false},
        contractFilename : {type : 'string', required: false},
        creditDays : {type : 'string', required: false},
        observations : {type : 'string', required: false}
    },customToJSON : function(){
        return sails.config.globals.formatObject(this);
    }

};