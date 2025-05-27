const mongoose = require('mongoose')



const WalletSchema = new mongoose.Schema({

wallet:{
    type:String,
    
    trim:true,
    

},
address:{
    type:String,
    
    trim:true,
    

}

})  






module.exports = mongoose.model('Wallet', WalletSchema)