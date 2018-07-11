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
    res.json({
        message: 'Handling POST requests from /products'
    });
});

router.get('/:productId', (req,res) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(201).json({
            message: 'You discovered a special ID',
            id: id
        });
    }else{
            res.status(201).json({
                message: 'You passed an ID'
            });
    }
});

module.exports = router;