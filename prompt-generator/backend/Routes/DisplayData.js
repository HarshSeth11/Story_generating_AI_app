const express = require('express');
const ConnectionDB = require('../db');
const router = express.Router();


router.post('/getData', async (req,res) => {
    try {
        // console.log(global.prompt_data);
        await ConnectionDB();
        res.send(global.prompt_data);
    } catch (error) {
        console.log("somthing went wrong");
        res.send("somthing went wrong");
    }
});

module.exports = router;