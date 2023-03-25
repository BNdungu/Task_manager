const mongoose = require('mongoose')
const port = process.env.PORT || 3000
// const connection_string =
//      'mongodb+srv://ngangandungu:ndungu11@cluster0.6x2tkdu.mongodb.net/TASK_MANAGER?retryWrites=true&w=majority'

const connectDB = ((url) => {
    return mongoose
        .connect(url,{
            useNewUrlParser : true,
            useCreateIndex : true,
            useFindAndModify : false,
            useUnifiedTopology : true
    })
    .then(() => console.log(`\nSERVER IS LISTENNING AT PORT: ${port}\n`))
    .catch((err) => console.log('\nSERVER COULDN\'T CONNECT TO THE DATABASE\n'))
})

module.exports = connectDB