module.exports.models = {
  schema: true,
  migrate: 'safe',
  attributes: {
    id: { type: 'string', columnName: '_id' }
  },

  dataEncryptionKeys: {
    default: 'xRoc4D0DjVrZYeVpUKDzQg9cneFnNbROqpTrtJgKAls='
  },
  cascadeOnDestroy: false
};