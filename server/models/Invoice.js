const mongoose = require('mongoose');

const { Schema } = mongoose;

const invoiceSchema = new Schema({
    
    status: String,
    billFromStreet_address: String,
    billFromCity: String,
    billFromPostCode: String,
    billFromCountry: String,
    billToName: String,
    billToEmail: String,
    billToStreetAddress: String,
    billToCity: String,
    billToPostcode: String,
    billToCountry: String,
    invoiceDate: String,
    paymentTerms: String,
    productDescription: String,
    dateCreated: {
        type: Date,
        default: Date.now
    },
    itemList: [
        {
            itemName: String,
            quantity: Number,
            price: Number,
            total: Number
        }
    ],
    total: Number
});

module.exports = mongoose.model('Invoice', invoiceSchema );