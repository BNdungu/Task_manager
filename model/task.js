const mongoose = require('mongoose')

const typeShema = new mongoose.Schema({
    name : {
        type : String,
        required :[true, 'Pleasse provide a valid name'],
        trim : true,
    },
    completed : Boolean
})

module.exports = mongoose.model('Task',typeShema)