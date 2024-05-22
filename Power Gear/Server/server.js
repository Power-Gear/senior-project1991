const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
const userRoutes=require('./routes/userRoutes')
const adminRoutes=require('./routes/adminRoutes')

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/User',userRoutes);
app.use('/Admin',adminRoutes);

// Define Routes (these routes will be created later)
// app.use('/api/products', require('./routes/productRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/orders', require('./routes/orderRoutes'));
// app.use('/api/categories', require('./routes/categoryRoutes'));




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
