const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')



router.post('/signup', async (req, res) => {
const { email, password } = req.body

    try {
      const user = new User({ email, password });
        await user.save();
        
const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY')

      res.send({token: token});  
    } catch (error) {
    return res.status(422).send(error.message);
        
    }
    
    
})


router.post('/signin', async(req, res) => {
    const {email, password} = req.body

    if (!email || !password) {
         return res.status(422).send({error: 'provide email & password'})
    }
    
    const user = await User.findOne({ email: email })
    if (!user) {
                 return res
                   .status(422)
                   .send({ error: " Invalid password or email" });
 
    }
    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
        res.send({token})

    } catch (error) {
        return res.status(422).send({error: 'Invalid password or email'})
    }



})

module.exports = router