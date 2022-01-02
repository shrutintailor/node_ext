// const express=require("express")
// const app =express();
// const port=process.env.port||8001;
// const db = require("./db/conn")

// const Product =require("./product/product")
// const cors=require("cors");
// //const product = require("./product/product");
// app.use(express.json());
// app.use(cors())
// app.post("/product/add",(req,res)=>{
//     try {
//         console.log(req.body)
//         const  Products =new Product(req.body);
      
//        const Prod = Products.save();
//         res.status(201).send(Prod)

//     }
//     catch(e){
//         res.status(401).send(e)
//     }
// })
// // app.get("/product",(req,res)=>{
// //     try{
// //         debugger;
// //         const productdata = Product.find();
// //         console.log(productdata);
// //         res.status(201).send(productdata)
// //     }
// //     catch(e){
// //         res.status(401).send(e)
// //     }

// // })
// app.get("/product", (req,res)=>{
     
//     try {
       
//         const Products= Product.find();
//         console.log(Products);
//         //res.status(201).send(productsdata);
//     } catch (error) {
//        // res.status(401).send(error);
//     }
// })
// // app.get((req,res)=>{
// //     try{

// //     }
// //     catch(r){

// //     }
// // })
// app.listen(port,()=>{
//     console.log(`conn to ${port}`)
// })
const express=require('express');
const app=express();
const port=process.env.PORT||3001;
//db connection
const db=require("./db/conn");
//model
const product=require("./product/product");
//const login=require("./model/login");
//enable cors
const cors=require("cors")
app.use(express.json());
app.use(cors())
//api for insert login table
// app.post("/login",async (req,res)=>{
//     try {
//         const user=new login(req.body);
//         console.log(user);
//         const userdata=await user.save();
        
//         res.status(201).send(userdata);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// })
// //api for get user data from login
// app.get("/login",async (req,res)=>{
//     try {
//         const useremail=req.body.email;
//         const user=await login.findOne({email:useremail});
//         console.log(user);
//         res.status(201).send(user);

//     } catch (error) {
//         res.status(400).send(error);
//     }
// })
//api for insert product data
app.post("/product",async (req,res)=>{
    try {
        const products=new product(req.body);
        console.log(products);
        const productdata=await products.save();
        
        res.status(201).send(productdata);
    } catch (error) {
        res.status(401).send(error);
    }
})
//api for get product data
app.get("/product",async (req,res)=>{
    try {
        const productsdata=await product.find();
        console.log(productsdata);
        res.status(201).send(productsdata);
    } catch (error) {
        res.status(401).send(error);
    }
})
//api for delete product by id
app.delete("/product/:id", async (req,res)=>{
    try {
        var id=req.params.id;
        var delpro=await product.findOneAndRemove({_id:id});
        console.log(delpro);
        res.status(201).send(delpro);
    } catch (error) {
        res.status(401).send(error);
    }
})
//api for get product by id
app.get("/product/:id",async (req,res)=>{
    try {
        var id=req.params.id;
        var data=await product.findOne({_id:id});
        console.log(data);
        res.status(201).send(data);
    } catch (error) {
        res.status(401).send(error);
    }
})
//api for update product by id
app.put("/product/:id",async (req,res)=>{
    try {
        var _id=req.body._id;
        console.log(_id)
        console.log("update:-"+data);
        var data=await product.findOneAndUpdate(_id,req.body,{new:true});
        console.log(data);
        res.status(201).send(data);
    } catch (error) {
        res.status(401).send(error);
    }
})
app.listen(port,()=>{
    console.log(`connection is live at port no:-${port}`);
})