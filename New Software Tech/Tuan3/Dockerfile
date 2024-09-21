# Sử dụng phiên bản Node.js 16
FROM node:20

# Tạo thư mục làm việc trong container
WORKDIR /

# Sao chép file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các phụ thuộc mà không cần kiểm tra xung đột peer dependencies
RUN npm install 

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Expose port (React app chạy trên cổng 3000)
EXPOSE 3000

# Chạy ứng dụng
CMD ["npm", "start"]
