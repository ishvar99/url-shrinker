const mongoose =require('mongoose');

const connectDatabase=()=>{
    mongoose.connect('mongodb://localhost/url-shortener', { useNewUrlParser: true,useUnifiedTopology: true })
    .then(()=>console.log('Database Connected!'))
    .catch((err)=>console.log('Something went wrong! ',err));
}

exports.connectDatabase= connectDatabase;