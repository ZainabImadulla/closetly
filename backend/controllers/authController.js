import {db} from "../db.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


export const register = (req, res) => {
    const q = "SELECT * FROM users WHERE email = ?";
    db.query(q, [req.body.email], (err, data) => {
      if(err) return res.status(500).json(err);
      if(data.length) return res.status(409).json("the given email is already registered");
      
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);
      const q = "INSERT INTO users (`firstname`, `lastname`, `email`, `password`) VALUE (?) ";
      const requestValues = [req.body.firstname, req.body.lastname, req.body.email, hashedPassword];
      db.query(q, [requestValues], (err, data)=> {
          if(err) return res.status(500).json(err);
              return res.status(200).json("a new user has been created");
      })
    }) 
}

export const login = (req, res) => {
    const q = "SELECT * FROM users WHERE email = ?";
    db.query(q, [req.body.email], (err,data) =>{
      if (err) return res.json(err);
      if(data.length == 0) return res.status(404).json("the given email is not registered");
      const isCorrect = bcrypt.compareSync(req.body.password, data[0].password);
      if(!isCorrect) return res.status(400).json("password is incorrect");

      const token = jwt.sign({id:data[0].id}, "jwtkey");
      const {password, ...other} = data[0];
      res.cookie("access_token", token, {
        httpOnly:true
      }).status(200).json(other)
    })

}

export const logout = (req, res) => {
  console.log(req);
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("user has been logged out")
}