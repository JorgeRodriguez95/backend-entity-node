const { Schema, model } = require('mongoose');

const TransferSchema = Schema({

    beneficiaryBankAccount: {
        type: String,
        require: true
    },
    beneficiaryBank: {
        type: String,
        require: true
    },
    beneficiaryBankAccountType: {
        type: String,
        require: true
    },
    beneficiaryName: {
        type: String,
        require: true
    },
    beneficiaryDni: {
        type: String,
        require: true
    },
    amount: {
        type: String,
        require: true
    },
    reason: {
        type: String,
        require: true
    },
    remitterId: {
        type: String,
        require: true
    }
});

module.exports = model( 'Transfer', TransferSchema );

