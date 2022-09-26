import mongoose from 'mongoose'

const MONGO_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
const connectMongo = async () => mongoose.connect(process.env.MONGO_URI).then(() => console.log("Succesfully connected to DB")).catch(err => console.log(err));

export default connectMongo;