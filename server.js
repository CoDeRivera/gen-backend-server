
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const productRoutes = require('./api/routes/products');

//First Middleware Ive written
// app.use((req,res,next) => {
//     res.status(200).json({
//         message: 'My First Middleware'
//     });
// });

//Only requests that start with /products path will be handled 
//by productRoutes and forwarded to /api/routes/products.js
app.use('/products', productRoutes);


//Server listening on port 3000
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});