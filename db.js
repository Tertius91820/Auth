const Mongoose = request("mongoose")
const RemoteDB = `mongodb+srv://Jubber:jgvbjZU65pBzvCgC@cluster0.bnpuo64.mongodb.net/?retryWrites=true&w=majority`
const connectDB = async () => {
  Mongoose.connect(RemoteDB)
  .then(client => {
    console.log('mongoDB connection succesfull');
  })
}
module.exports = connectDB
