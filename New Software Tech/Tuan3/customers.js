// customers.js
const mongoose = require('mongoose');

// Customer Schema
const customerSchema = new mongoose.Schema({
    customerId: {
        type: Number,
        required: true,
        min: 1,
        unique: true  // Đảm bảo rằng Customer ID là duy nhất
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

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

// CRUD Operations
// Hàm tạo khách hàng
const createCustomer = async (customerData) => {
    try {
        const customer = new Customer(customerData);
        await customer.save();
        return customer;
    } catch (err) {
        console.error('Error in createCustomer:', err);

        if (err.code === 11000) {
            throw new Error('Customer ID already exists');
        }
        throw new Error(err.message);
    }
};

// Hàm lấy tất cả khách hàng
const getCustomers = async () => {
    try {
        const customers = await Customer.find({});
        return customers;
    } catch (err) {
        console.error('Error in getCustomers:', err);
        throw new Error('Failed to fetch customers');
    }
};

// Hàm lấy khách hàng theo ID
const getCustomerById = async (customerId) => {
    try {
        const customer = await Customer.findOne({ customerId });
        if (!customer) {
            throw new Error('Customer not found');
        }
        return customer;
    } catch (err) {
        console.error('Error in getCustomerById:', err);
        throw new Error('Failed to fetch customer');
    }
};

// Hàm cập nhật khách hàng theo ID
const updateCustomer = async (customerId, updateData) => {
    try {
        const updatedCustomer = await Customer.findOneAndUpdate(
            { customerId },
            updateData,
            { new: true, runValidators: true }
        );
        if (!updatedCustomer) {
            throw new Error('Customer not found');
        }
        return updatedCustomer;
    } catch (err) {
        console.error('Error in updateCustomer:', err);
        throw new Error('Failed to update customer');
    }
};

// Hàm xóa khách hàng theo ID
const deleteCustomer = async (customerId) => {
    try {
        const deletedCustomer = await Customer.findOneAndDelete({ customerId });
        if (!deletedCustomer) {
            throw new Error('Customer not found');
        }
        return deletedCustomer;
    } catch (err) {
        console.error('Error in deleteCustomer:', err);
        throw new Error('Failed to delete customer');
    }
};

module.exports = {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};
