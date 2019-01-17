'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Schema de la entidad Cliente para ORM
*/

module.exports ={

    attributes :{
        name : {type:'string', required : true},
        lastname:{type:'string', required : false},
        RFC : {type:'string', required : true, unique : true},
        address: {type : 'string', required: false},
        phoneNumber : {type : 'number', required : true,columnName:'phone_number'},
        email: {type : 'string', required : true, unique : true}
    }

};