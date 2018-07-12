const express = require('express');
const router = express.Router();


//Handles the GET request from server.js /products path
router.get('/', (req,res) => {
    res.json({
        message: 'Handling GET requests from /products'
    });
});
//Handles the POST request from server.js /products path
router.post('/', (req,res) => {
    //Create new product
    const product = {
        name: req.body.name,
        price: req.body.price,
    };
    res.status(201).json({
        message: 'Handling POST requests from /products',
        //Display created product
        createdProduct: product
    });
    
});

//Handles the GET request from server.js /products path with
//dynamic variable of productId
router.get('/:productId', (req,res) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(201).json({
            message: 'You discovered a special ID',
            id: id
        });
    }else{
            res.status(201).json({
                message: 'You passed an ID',
            });
    }
});

//Handles the PATCH request from server.js /products path with
//dynamic variable of productId
router.patch('/:productId', (req,res) => {
    const id = req.params.productId;
    res.status(201).json({
        message: 'Updated Product ' + id
    });
});

//Handles the DELETE request from server.js /products path with
//dynamic variable of productId
router.delete('/:productId', (req,res) => {
    const id = req.params.productId;
    res.status(202).json({
        message: id + ' was deleted'
    });
});

module.exports = router;
