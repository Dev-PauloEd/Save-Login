const save = require('./dataSave')
const express = require('express')
const router = express.Router()



router.get('/', (req, res)=> {
    res.sendFile('./public/index.html', { root: __dirname })
})

router.post('/postar', (req, res)=> {
    const saveName = req.body.name
    const saveEmail = req.body.email
    const savePass = req.body.password
    
    save(`${saveName} | ${saveEmail} | ${savePass}`)

    console.log(saveName)
    console.log(saveEmail)
    console.log(savePass)
    res.send('Valor recebido com sucesso!')
})

module.exports = router