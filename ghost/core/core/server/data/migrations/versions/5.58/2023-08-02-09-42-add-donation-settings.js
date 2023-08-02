const {combineTransactionalMigrations, addSetting} = require('../../utils');

module.exports = combineTransactionalMigrations(
    addSetting({
        key: 'donations_enabled',
        value: true,
        type: 'boolean',
        group: 'donations',
        flags: 'PUBLIC'
    }),
    addSetting({
        key: 'donations_currency',
        value: 'USD',
        type: 'string',
        group: 'donations'
    }),
    addSetting({
        key: 'donations_suggested_amount',
        value: 0,
        type: 'number',
        group: 'donations'
    })
);
