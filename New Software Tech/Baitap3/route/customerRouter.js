import express from 'express'
const router = express.Router();
import customerController from '../controllers/customerController.js';

router.post('/customers', customerController.createCustomer);
router.get('/customers', customerController.getCustomers);
router.get('/customers/:id', customerController.getCustomerById);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

export default router;