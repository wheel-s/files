const mongoose = require('mongoose')



const WalletSchema = new mongoose.Schema({

wallet:{
    required:[true, 'please provide Taproot Wallet'],
    type:String,
    trim:true,
   
    

},
address:{
    
    required:[true, 'please provide Taproot x-link'],
    type:String,
    trim:true,
    

}

})  






module.exports = mongoose.model('Wallet', WalletSchema)