'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Controller con la definición de los servicios de Archivos
*/

var uploadFile = function(req, res){

    req.file('contract').upload({ dirname: '../../assets/contracts' },function(err,uploadedFile){
        if(err){
            return res.fileUploadException(err);
        }

        if (uploadedFile.length === 0){
            return res.badRequest('No file was uploaded');
        }

        return res.json(uploadedFile);

    });

}

module.exports = {   
    "uploadFile" : uploadFile
};