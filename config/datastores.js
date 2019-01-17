module.exports.datastores = {

  /***************************************************************************
  *                                                                          *
  * (Para producción ajustar dentro de `config/env/production.js`.)          *
  *                                                                          *
  ***************************************************************************/

  default: {
    adapter: require('sails-mongo'),
    host: "localhost",
    port:27017,
    database: 'fletesDB'
  }

};