const mongoose = require('mongoose')



const WalletSchema = new mongoose.Schema({

wallet:{
    type:String,
    required:[true],
    trim:true,
    

}

})  






module.exports = mongoose.model('Wallet', WalletSchema)