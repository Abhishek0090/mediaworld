import db from "../connect.js";
import jwt from "jsonwebtoken";


export const getRelationShips = (req, res) => {

    const q = "SELECT  followerUserId FROM relationships WHERE followerUserId =?";

    db.query(q, [req.query.followerUserId], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data.map(relationship => relationship.followerUserId));
    })
    // console.log(data);

}


export const addRelationShip = (req, res) => {
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json("Not Logged In !")


    //for getting our userid with jwt
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");


        const q = "INSERT INTO relationships( `followedUserId`,`followerUserId`) VALUES (?)";
        const values = [
            userInfo.id,
            req.body.userId
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err)

            return res.status(200).json("Following");
        })


    })

}


export const deleteRelationShip = (req, res) => {
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json("Not Logged In !")


    //for getting our userid with jwt
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");


        const q = "DELETE FROM relationships WHERE `followedUserId` = ? AND `followerUserId` = ?";


        db.query(q, [userInfo.id, req.query.userId], (err, data) => {
            if (err) return res.status(500).json(err)

            return res.status(200).json("UnFollow");
        })


    })
}