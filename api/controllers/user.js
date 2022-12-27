import db from "../connect.js";
import jwt from "jsonwebtoken";  


export const getUser = (req, res) => {
    //TODO
    

    const userId = req.params.userId;

    const q = "SELECT * FROM users WHERE id=?";

    db.query(q,[userId],(err,data)=>{
        if(err) return res.status(500).json(err);

        const { password, ...info } = data[0]; // avoiding password to show while fetching 


        return res.json(info)
    })

}   