const express = require('express');
const cors = require('cors');
const sequelize = require('./database/config');

const app = express();


app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define Routes (these routes will be created later)
// app.use('/api/products', require('./routes/productRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/orders', require('./routes/orderRoutes'));
// app.use('/api/categories', require('./routes/categoryRoutes'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
