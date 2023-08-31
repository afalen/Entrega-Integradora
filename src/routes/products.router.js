const {Router} = require('express')
const {userModel} = require('../models/products.model')

const router = Router()

router.get('/', async(req,res)=>{
    try{
        let products = await userModel.find()
        res.send({result: 'success', payload: products})
    }catch(error){
        console.error(error)
    }
})


router.post('/', async(req,res)=>{
    let {nombre, categoria, precio, stock, imagen} = req.body
    if(!nombre || !categoria || !precio || !stock || !imagen){
        res.send({status: "error", error: "Faltan parámetros"})
    }

    let result = await userModel.create({nombre, categoria, precio, stock, imagen})
    res.send({result: "success", payload: result})
})

router.put('/:uid', async(req,res)=>{
    let {uid} = req.params

    let productToReplace = req.body

    if(!productToReplace.nombre || !productToReplace.categoria || !productToReplace.precio || !productToReplace.stock || !productToReplace.imagen){
        res.send({status:'error', error:'Faltan parámetros'})
    }

    let result = await userModel.updateOne({_id: uid}, productToReplace)
    res.send({result: 'success', payload: result})

})

router.delete('/:uid', async(req,res)=>{
    let {uid} = req.params
    let result = await userModel.deleteOne({_id: uid})
    res.send({result: "success", payload: result})
})

module.exports = router