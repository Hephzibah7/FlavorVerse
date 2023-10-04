import express from "express"
import mongoose from "mongoose"
import cors from "cors"
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("DB connected")
})

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})
const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res) => {
 const {email, password}=req.body
 User.findOne({email:email}, (err,user)=>{
  if(user){
    if(password==user.password){
      res.send({message:"Login Successful", user:user})
      
    }
    else{
      res.send({message:"Password didn't match"})
    }
  }
  else{
    res.send({message:"User not registered"})
  }
 })
})
app.post("/register", (req, res) => {
  const { name, email, password } = req.body
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User has already Registered" })
    }
    else {
      const user = new User({
        name: name,
        email: email,
        password: password
      })
      user.save(err => {
        if (err) {
          res.send(err)
        }
        else {
          res.send({ message: "Successfully Registered" })
        }
      })
    }

  })
})
  app.listen(9002, () => {
    console.log("Backend started at port 9002")
  })

