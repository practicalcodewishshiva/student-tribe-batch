const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors())
const users = [];
app.get("/", (req, res) => {
  return res.status(200).json({
    data: users,
  });
});

app.post("/register", (req, res) => {
  const { email, password, phoneNo } = req.body;


  const userFound = users.find((u)=> u.email === email);
  if(userFound){
    return res.status(404).json({
        status:"Failed",
        message:"User Already Exist"
    })
  }

  users.push(req.body);

  return res.status(201).json({
    status:"Success",
    message:"User Created Successfully"
  })


});

app.post('/login',(req,res)=>{
    const {email,password}= req.body;
    const userFound = users.find((copyOfUsers)=>copyOfUsers.email===email);
    if(!userFound){
        return res.status(400).json({
            message:"Bad Request try to Create Your Account First"
        })
    }
    if(userFound){
        if(userFound.email === email && userFound.password === password){
            return res.status(200).json({
                status:"Success",
                message:"Login Successful"
            })
        }
        else{
            return res.status(404).json({
                status:"Failed",
                message:"Invalid Credentials"
            })
        }
    }
})

app.listen(process.env.PORT || 5500, () => {
  console.log(`Server is started on port ${process.env.PORT}`);
});
