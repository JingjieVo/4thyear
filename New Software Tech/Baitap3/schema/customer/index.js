// customers.js
const mongoose = require('mongoose');

// Customer Schema
const customerSchema = new mongoose.Schema({
    customerId: {
        type: Number,
        required: true,
        min: 1
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    annualIncome: {
        type: Number,
        required: true,
        min: 0
    },
    spendingScore: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    profession: {
        type: String,
        required: true
    },
    workExperience: {
        type: Number,
        required: true,
        min: 1
    },
    familySize: {
        type: Number,
        required: true,
        min: 1
    }
});

export const Customer = mongoose.model('Customer', customerSchema);


