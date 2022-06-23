const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router()



router.get('/test',(req,res) => { 

res.send("Hello Wolrd ")
})


router.post('/add',async(req , res) => {
    try {
        const{name,email,phone} = req.body ;
        const newContact =  new Contact ({ name, email,phone})
        await newContact.sabe();
        res.status(200).send({msg:"Contact added succ .." , newContact})
    } catch (error) {
        res.status(400).send({msg:" Can not add contact !!!", error})
        
    }
})


router.get('/all', async (req ,res)=> {
    try {
        const listConacts = await Contact.find()
        res.status (200).send({msg:"This is the list of all contact"})
    } catch (error) {
        req.status(400).send({msg:"Cannot get all contacts" ,error}) 
        
    }
})


router.get('/:id',async (req,res)=> {
    try {
        const contactToGet = await Contact.findOne({_id: req.params.id})
        res.status(200).send({msg:"I get the contact.." ,contactToGet})
    
    } catch (error) {
        res.status(400).send({msg:"Cannot get the contact with this id " , error})
        
    }
})

router.delete('/:_id',async (req,res) => {
    try {
        const {_id} = req.params
        await Contact.findOneAndDelete({_id})
        res.status(200).send ({msg:"Contact deleted ..."})
    } catch (error) {
        res.status(400).send ({msg:"Contact deleted ..." , error})

    }
})

router.put('/:_id', async (req , res)=> {
    try {
        const {_id} = req.params;
        const result = await Contact.updateOne({_id}, {$set:{...req.body}})
        res.status(200).send({msg:"Contact Updated..."})
    } catch (error) {
        res.status(400).send({msg:"Contact cannot Update" , error})
        
    }
})






module.exports = router; 