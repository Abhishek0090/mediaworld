import db from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    //Check if user Exists 

    const q = "SELECT * FROM users where username=?";

    //execute query
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err)

        if (data.length) return res.status(409).json("User Already Exists !")

        //Hash the password using bcryptjs
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users (`username`,`email`,`password`,`name`) VALUES (?)";

        const values = [req.body.username, req.body.email, hashedPassword, req.body.name]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User has been Created");
        })

    })

    //CHECK A NEW USER 



}

export const login = (req, res) => {

    const q = "SELECT * FROM users where username=?";


    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length === 0) return res.status(404).json("User not found")

        //checking password
        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);

        if (!checkPassword) return res.status(400).json("Wrong Password or Username !");


        const token = jwt.sign({ id: data[0].id }, "secretkey");

        const { password, ...others } = data[0]; // avoiding password to show while fetching 

        //for storing our data in cookie
        res.cookie("accessToken", token, {
            httpOnly: true
        }).status(200).json(others);
    })
}

export const logout = (req, res) => {

    //for deleting our cookie
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none" //for restricting the blockage of website while clearing cookie
    }).status(200).json("User has been Logged out");

}

