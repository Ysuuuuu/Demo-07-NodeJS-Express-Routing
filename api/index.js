const express = require('express');

const PORT = 4000;

const app = express();
app.use(express.json());

//home page
app.get('/', (request, response) => {
    //response.status(200).json({ message: 'API Homepage' });
    response.send('<h1>Welcome to the API: RAMOS SYUTO</h1>');
    //response.status(200).json({ message: 'Welcome to the API: RAMOS SYUTO' });
});

// Customers  
const customerRouter = require('./Routes/customer');  
app.use('/customers', customerRouter);  

// Orders  
const orderRouter = require('./Routes/order');  
app.use('/orders', orderRouter);  

// Payments  
const paymentRouter = require('./Routes/payment');  
app.use('/payments', paymentRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});