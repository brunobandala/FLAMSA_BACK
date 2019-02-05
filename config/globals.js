module.exports.globals = {
  _: require('@sailshq/lodash'),
  UUID: require('uuid/v4'),
  async: false,
  models: true,
  sails: true,
  services: true,
  formatObject : function(item) {
    
    if (item != null && item != undefined) {
      for (var value of Object.keys(item)) {
        if (typeof item[value] === 'string') {
          item[value] = item[value].toLowerCase();
        }

        if (typeof item[value] === 'object') {
          sails.log(item[value]);
          item[value] = this.formatObject(item[value]);
        }

      }
    }
    return item;
  }
};