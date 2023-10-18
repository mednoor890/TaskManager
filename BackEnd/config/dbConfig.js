const mongoose =require ("mongoose");
const DbConnect=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/taskDB', {
            
        });
        console.log('MongoDB connected');//making sure we connected to db
      } catch (error) {
        console.error('MongoDB connection failed: ', error.message)
        process.exit(1)// if an error occurs we exit the process after logging the errorn msg
      }
}
module.exports= DbConnect

