const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/cust69",{
    useNewUrlParser:true,
    // useUnifiedTopolody:true
}).then(()=>{
    console.log("success")
}).catch((e)=>{
    console.log(`error${e}`)
})