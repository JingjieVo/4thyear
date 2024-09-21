const mongoose = require('mongoose');
const connectDB = require('./mongoose');
const {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
} = require('./customers');

// Kết nối tới MongoDB
connectDB();

const main = async () => {
    try {
        // Tạo khách hàng mẫu
        const newCustomer = {
            customerId: 1,
            gender: 'male',
            age: 25,
            annualIncome: 50000,
            spendingScore: 85,
            profession: 'Software Engineer',
            workExperience: 3,
            familySize: 4
        };

        // Tạo khách hàng
        const customer = await createCustomer(newCustomer);
        console.log('Customer created:', customer);

        // Lấy danh sách tất cả khách hàng
        // const customers = await getCustomers();
        // console.log('All customers:', customers);

        // // Lấy khách hàng theo ID
        // const customerById = await getCustomerById(1);
        // console.log('Customer by ID:', customerById);

        // // Cập nhật khách hàng
        // const updatedCustomer = await updateCustomer(1, { age: 26 });
        // console.log('Updated customer:', updatedCustomer);

        // // Xóa khách hàng
        // const deletedCustomer = await deleteCustomer(1);
        // console.log('Deleted customer:', deletedCustomer);
    } catch (err) {
        console.error('Error:', err.message);
    } finally {
        // Đóng kết nối tới MongoDB
        mongoose.connection.close();
    }
};

// Thực thi chương trình
main();
