import {db} from "../db.js"
import jwt from "jsonwebtoken";


export const getAllClothing = (req, res) => {
    const token = req.cookies.access_token;
    const q = "SELECT * FROM clothes WHERE uid = ?";

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("not valid token")
        db.query(q, [userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.json(data);
        })
    })
}

export const getTops = (req, res) => {
    const token = req.cookies.access_token;
    const q = "SELECT * FROM clothes WHERE uid = ? && category = 'top'";

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("not valid token")
        db.query(q, [userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.json(data);
        })
    })
}

export const getBottoms = (req, res) => {
    const token = req.cookies.access_token;
    const q = "SELECT * FROM clothes WHERE uid = ? && category = 'pant'";

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("not valid token")
        db.query(q, [userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.json(data);
        })
    })
}

export const getShoes = (req, res) => {
    const token = req.cookies.access_token;
    const q = "SELECT * FROM clothes WHERE uid = ? && category = 'shoe'";

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("not valid token")
        db.query(q, [userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.json(data);
        })
    })
}

export const postClothing = (req, res) => {
    const token = req.cookies.access_token;
    const q = "INSERT INTO clothes (`description`, `img`, `uid`, `category`) VALUE (?) ";

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("not valid token")

        const values = [
            req.body.description,
            req.body.img,
            userInfo.id,
            req.body.category
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.status(200).json("clothing has been made");
        })
    })
}