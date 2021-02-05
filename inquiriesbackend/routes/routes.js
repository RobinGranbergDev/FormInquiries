const express = require('express')
const router = express.Router()
const inquirieTemplateCopy = require('../models/InquirieModel')

router.post('/inquirie', (req, res) => {
    const newInquirie = new inquirieTemplateCopy({
        subCategory: req.body.subCategory,
        start: req.body.start,
        title: req.body.title,
        description: req.body.description,
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email
    })
    newInquirie.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router