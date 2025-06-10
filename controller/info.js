
const Wallet = require('../models/info')
const BadRequestError = require('../MiddleWare/badRequest')


const createInfo= async (req, res)=>{
    try{
    const wallet = await Wallet.create(req.body)
     res.status(201).json({wallet})
    }
     catch(error){
       
        throw new BadRequestError("please provide valid credential")
    }
}


module.exports = {
    
    createInfo,
   
}