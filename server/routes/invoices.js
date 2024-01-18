const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');

//Get all invoices
router.get('/', async (req, res) => {

    try{

        const invoices = await Invoice.find()
        .then(invoices => {

            res.status(200).json(invoices);

        })
        .catch( err => {

            res.status(500).json('Internal Server Error');

        });


    }

    catch{

        res.status(500).json('Internal Server Error');

    }

});

//Get single invoice
router.get('/:id', async (req, res) => {

    try {
        
        const invoice = await Invoice.findById(req.params.id)
        .then(invoice => {

            res.status(200).json(invoice);

        })
        .catch(err => {

            res.status(500).json('Internal Server Error');

        });

    }
    catch{(err => {

        res.status(500).json('Internal Server Error');

    })};

});

//Add a new Invoice
router.post('/', async (req, res) => {

    try{

        const invoice = await Invoice.create({

            status: req.body.status,
            billFromStreet_address: req.body.billFromStreet_address,
            billFromCity: req.body.billFromCity,
            billFromPostCode: req.body.billFromPostCode,
            billFromCountry: req.body.billFromCountry,
            billToName: req.body.billToName,
            billToEmail: req.body.billToEmail,
            billToStreetAddress: req.body.billToStreetAddress,
            billToCity: req.body.billToCity,
            billToPostcode: req.body.billToPostcode,
            billToCountry: req.body.billToCountry,
            invoiceDate: req.body.invoiceDate,
            dateCreated: Date.now(),
            paymentTerms: req.body.paymentTerms,
            productDescription: req.body.productDescription,
            itemList: req.body.itemList,
            total: req.body.total
            
        })
        .then(invoice => {

            res.status(201).json({data: invoice});

        })
        .catch(err => {

            res.status(500).json('Internal Server Error'); 

        });


    }

    catch{(err => {

        res.status.apply(500).json('Internal Server Error');

    })};

});

//Edit an invoice
router.put('/:id', async (req, res) => {

    const id = req.params.id;

    const invoiceToEdit = await Invoice.findByIdAndUpdate(id, {

        billFromStreet_address: req.body.billFromStreet_address,
        billFromCity: req.body.billFromCity,
        billFromPostCode: req.body.billFromPostCode,
        billFromCountry: req.body.billFromCountry,
        billToName: req.body.billToName,
        billToEmail: req.body.billToEmail,
        billToStreetAddress: req.body.billToStreetAddress,
        billToCity: req.body.billToCity,
        billToPostcode: req.body.billToPostcode,
        billToCountry: req.body.billToCountry,
        productDescription: req.body.productDescription,

    })

    .then(invoiceToEdit => {

        res.status(200).json(invoiceToEdit);

    })
    .catch(err => {

        res.status(500).json(err);

    })

});

//Delete an invoice
router.delete('/:id', async (req, res) => {

    try {

        const deletedInvoice = await Invoice.findByIdAndDelete(req.params.id)
        .then(deletedInvoice => {

            res.status(200).json(deletedInvoice);

        })
        .catch(err => {

            res.status(500).json('Internal Server Error');

        });

    }
    catch {

        res.status(500).json('Internal Server Error');

    };
});

//Mark an invoice as complete
router.put('/complete/:id', async (req, res) => {

    const id = req.params.id;

    try {

        const invoiceToMarkComplete = await Invoice.findByIdAndUpdate(id ,{
            status: req.body.status
        })

        .then(invoiceToMarkComplete => {
            res.status(200).json(invoiceToMarkComplete);
        })
        .catch(err => {
            res.status(500).json('Internal Server Error');
        });

    }
    catch {
        
        res.status(500).json('Internal Server Error');
    }
})

module.exports = router;
