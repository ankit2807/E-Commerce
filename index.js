const express = require('express');
const app = express();
require('dotenv').config();
const connection = require('./database/db');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const productRouter = require('./routes/product');
const categoryRouter = require('./routes/category');
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const cors = require('cors');
const cookieParser = require("cookie-parser");

//database connection
connection();

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser())

//routes
app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);
app.use('/api/product', productRouter);
app.use('/api/category', categoryRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

//port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});