const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Set Listening Port
const port = process.env.PORT || 3000;

//First Middleware Ive written
// app.use((req,res,next) => {
//     res.status(200).json({
//         message: 'My First Middleware'
//     });
// });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Route Handlers
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

//Only requests that start with /products path will be handled 
//by productRoutes and forwarded to /api/routes/products.js
app.use('/products', productRoutes);

//Only requests that start with /orders path will be handled 
//by orderRoutes and forwarded to /api/routes/orders.js
app.use('/orders', orderRoutes);


//Error if route not found
app.use((req,res,next) => {
    const error = new Error('Page Not FOUND!');
    error.status = 404;
    next(error);
});

app.use((error, req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


//Server listening on port 3000
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
