import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";

const router = express.Router()

//LOGIN ROUTES
router.post("/sign-in", (req, res) => {
    const sql = "SELECT * from admin Where admin_email = ? and admin_password = ?"
    con.query(sql, [req.body.admin_email, req.body.admin_password], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "Query error" })
        if (result.length > 0) {
            const email = result[0].admin_email;
            const token = jwt.sign({ role: "admin", email: email }, "jwt_secret_key", { expiresIn: "1d" })
            res.cookie("token", token)
            return res.json({ loginStatus: true })
        } else return res.json({ loginStatus: false, Error: "Wrong email or password" })
    })
})

//IMAGE UPLOAD
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})

// POST /auth/add-agent route to handle agent insertion
router.post("/add-agent", upload.single('staff_avatar'), (req, res) => {
    console.log("Received file:", req.file);
    console.log("Received form data:", req.body);
    const sql = "INSERT INTO staff (staff_type_id, staff_group_id, role_id, staff_name, staff_surname, staff_email, staff_password, staff_address, staff_phone, staff_fax, staff_gender, staff_birthdate, staff_emso, staff_pay, staff_startdate, staff_avatar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.staff_type_id,
        req.body.staff_group_id,
        req.body.role_id,
        req.body.staff_name,
        req.body.staff_surname,
        req.body.staff_email,
        req.body.staff_password,
        req.body.staff_address,
        req.body.staff_phone,
        req.body.staff_fax,
        req.body.staff_gender,
        req.body.staff_birthdate,
        req.body.staff_emso,
        req.body.staff_pay,
        req.body.staff_startdate,
        req.file.filename // Assuming multer has stored the file details in req.file
    ];

    con.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting agent:", err);
            return res.status(500).json({ Status: false, Error: "Failed to insert agent." });
        }
        return res.json({ Status: true });
    });
});

//GET ROUTES
//MANAGERS
router.get('/managers', (req, res) => {
    const sql = "SELECT * FROM manager";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

//STAFF TYPE
router.get('/staff-type', (req, res) => {
    const sql = "SELECT * FROM staff_type";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

//STAFF GROUP
router.get('/staff-group', (req, res) => {
    const sql = "SELECT * FROM staff_group";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

//ROLES
router.get('/roles', (req, res) => {
    const sql = "SELECT * FROM roles";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

//ADMINS
router.get('/admins', (req, res) => {
    const sql = "SELECT * FROM admin";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

//ESTATES
router.get('/estates', (req, res) => {
    const sql = "SELECT * FROM estate";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

//USERS
router.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

//POSTS
router.get('/posts', (req, res) => {
    const sql = "SELECT * FROM post";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

//BRANCH OFFICES
router.get('/branch-offices', (req, res) => {
    const sql = "SELECT * FROM office_branch";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

//COMBINED STAFF DATA
router.get('/staff', (req, res) => {
    const sql = "SELECT staff.*, staff_group.*, staff_type.* FROM staff " +
                "INNER JOIN staff_group ON staff.staff_group_id = staff_group.staff_group_id " +
                "INNER JOIN staff_type ON staff.staff_type_id = staff_type.staff_type_id";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" });
        return res.json({ Status: true, Result: result });
    });
});



//GET COUNTS
//ESTATE COUNT
router.get("/estates-count", (req, res) => {
    const sql = "SELECT count(estate_id) as estate_count from estate";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})




export { router as adminRouter }