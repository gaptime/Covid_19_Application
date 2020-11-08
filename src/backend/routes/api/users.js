const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
//@route Get api/user
//@ desc Register user
//@access Public


router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'please include a valid email').isEmail(),
    check('password', 'please enter a password with 6 or more characters').isLength({min: 6})
], 
async (req, res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {name, email, password}= req.body;
try{
    //see if user exists
    let user = await User.findOne({email: email});
    if(user){
        res.status(400).json({errors: [{msg: 'User already exist'}]});

    }
//encrpyt password
//return jsonwebtoken

}catch(err){
    console.error(err.message);
    res.status(500).send('server error');
}

user= new User({
    name, 
    email,
    password
});
const salt = await bcrypt.genSalt(10);
user.password = await bcrypt.hash(password, salt);

await user.save();

    console.log(req.body);

    res.send('User registered')});



module.exports = router;
