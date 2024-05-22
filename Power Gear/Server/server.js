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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
