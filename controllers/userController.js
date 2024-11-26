const UserModel = require('../models/userSchema');
const bcrypt = require('bcrypt');


const createUser = async (req, res) => {
    try{
        const {password} = req.body;

        await bcrypt.hash(password, 10, async (err,hash) => {
            req.body = { ...req.body, password: hash }
            await UserModel.create(req.body);
        
            res.status(200).json({
            succeed: true,
            message: "User Created Successfully"
        })

        })

    }catch(err) {
        res.status(401).json({
            succeed: false,
            message: "User Not Created",
            err
        })
    }
}

const getUser = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await UserModel.findOne({email})

        if(user){
            const hashedPassword = user.password;
            bcrypt.compare(password, hashedPassword, function(err, result) {
                if(result) {
                    res.status(200).json({
                        succeed: true,
                        message: `User login successfully`
                    })
                } else {
                    res.status(401).json({
                        succeed : false,
                        message : " User password false ",
                    })
                }
              });
        }
    }catch(err){
        res.status(401).json({
            succeed: false,
            message: "User Not Found",
            err
        })
    }
}

module.exports =  {
    createUser,
    getUser
}