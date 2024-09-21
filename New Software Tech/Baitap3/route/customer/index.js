const express = require('express');
const route = express.Router();
const customerController = require('../../controllers/customerController')

route.post('/customers', customerController.createCustomer);
route.get('/customers', customerController.getCustomers);
route.get('/customers/:id', customerController.getCustomerById);
route.put('/customers/:id', customerController.updateCustomer);
route.delete('/customers/:id', customerController.deleteCustomer);