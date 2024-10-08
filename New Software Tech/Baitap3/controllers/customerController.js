import Customer from '../schema/customer.js'

const customerController = {
    // Tạo mới Customer (Create)
    createCustomer: async (req, res) => {
        try {
            const newCustomer = new Customer(req.body);
            await newCustomer.save();
            res.status(201).json(newCustomer);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Lấy danh sách tất cả Customer (Read)
    getCustomers: async (req, res) => {
        try {
            const customers = await Customer.find();
            res.status(200).json(customers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Lấy thông tin chi tiết một Customer (Read)
    getCustomerById: async (req, res) => {
        try {
            const customer = await Customer.findById(req.params.id);
            if (!customer) return res.status(404).json({ message: 'Customer not found' });
            res.status(200).json(customer);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Cập nhật thông tin Customer (Update)
    updateCustomer: async (req, res) => {
        try {
            const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedCustomer) return res.status(404).json({ message: 'Customer not found' });
            res.status(200).json(updatedCustomer);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Xóa một Customer (Delete)
    deleteCustomer: async (req, res) => {
        try {
            const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
            if (!deletedCustomer) return res.status(404).json({ message: 'Customer not found' });
            res.status(200).json({ message: 'Customer deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};


export default customerController;
