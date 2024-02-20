const fs = require('fs')

const save = (param) => {
    

    const filePath = './app/Saved/file.txt'
    fs.writeFile(filePath, param, (err)=>{
        if (err) throw err
        console.log('Certo, texto adicionado ao arquivo com sucesso!')
    })    
}

module.exports = save