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

// POST INSERT AGENT
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

// POST INSERT MANAGER
router.post("/add-manager", upload.single('manager_avatar'), (req, res) => {
    console.log("Received file:", req.file);
    console.log("Received form data:", req.body);
    const sql = "INSERT INTO manager (role_id, staff_type_id, manager_name, manager_surname, manager_address, manager_phone, manager_fax, manager_gender, manager_birthdate, manager_emso, manager_pay, manager_startdate, manager_became_date, manager_avatar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.role_id,
        req.body.staff_type_id,
        req.body.manager_name,
        req.body.manager_surname,
        req.body.manager_address,
        req.body.manager_phone,
        req.body.manager_fax,
        req.body.manager_gender,
        req.body.manager_birthdate,
        req.body.manager_emso,
        req.body.manager_pay,
        req.body.manager_startdate,
        req.body.manager_became_date,
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

// POST INSERT ADMIN
router.post("/add-admin", upload.single('admin_avatar'), (req, res) => {
    console.log("Received file:", req.file);
    console.log("Received form data:", req.body);
    const sql = "INSERT INTO admin (staff_type_id, role_id, admin_name, admin_surname, admin_email, admin_password, admin_address, admin_phone, admin_fax, admin_gender, admin_birthdate, admin_emso, admin_pay, admin_startdate, admin_avatar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.staff_type_id,
        req.body.role_id,
        req.body.admin_name,
        req.body.admin_surname,
        req.body.admin_email,
        req.body.admin_password,
        req.body.admin_address,
        req.body.admin_phone,
        req.body.admin_fax,
        req.body.admin_gender,
        req.body.admin_birthdate,
        req.body.admin_emso,
        req.body.admin_pay,
        req.body.admin_startdate,
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

//INSERT ESTATE
router.post("/add-estate", (req, res) => {
    console.log("Received form data:", req.body);
    const sql = "INSERT INTO estate (owner_id, staff_group_id, estate_address, estate_type, estate_bedrooms, estate_quadrature, estate_rent, estate_city, estate_bathrooms, estate_latitude, estate_longitude, estate_property) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.owner_id,
        req.body.staff_group_id,
        req.body.estate_address,
        req.body.estate_type,
        req.body.estate_bedrooms,
        req.body.estate_quadrature,
        req.body.estate_rent,
        req.body.estate_city,
        req.body.estate_bathrooms,
        req.body.estate_latitude,
        req.body.estate_longitude,
        req.body.estate_property
    ];

    console.log("Values to insert:", values);

    con.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting estate:", err);
            return res.status(500).json({ Status: false, Error: "Failed to insert estate." });
        }
        return res.json({ Status: true });
    });
});

// INSERT POST
router.post("/add-post", (req, res) => {
    console.log("Received form data:", req.body);
    const sql = "INSERT INTO post (office_branch_id, staff_id, estate_id, post_title, post_created_at) VALUES (?, ?, ?, ?, ?)";
    const values = [
        req.body.office_branch_id,
        req.body.staff_id,
        req.body.estate_id,
        req.body.post_title,
        req.body.post_created_at,
    ];

    console.log("Values to insert:", values);

    con.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting estate:", err);
            return res.status(500).json({ Status: false, Error: "Failed to insert estate." });
        }
        return res.json({ Status: true });
    });
});

//INSERT POST DESCRIPTION
router.post("/add-post-description", (req, res) => {
    console.log("Received form data:", req.body);
    
    const sql = "INSERT INTO post_details (post_id, post_detail_desc, post_detail_utilities, post_detail_pets, post_detail_income, post_detail_size, post_detail_schools, post_detail_bus, post_detail_restaurant) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    const values = [
        req.body.post_id,
        req.body.post_detail_desc,
        req.body.post_detail_utilities,
        req.body.post_detail_pets,
        req.body.post_detail_income,
        req.body.post_detail_size,
        req.body.post_detail_schools,
        req.body.post_detail_bus,
        req.body.post_detail_restaurant,
    ];

    console.log("Values to insert:", values);

    con.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting estate:", err);
            return res.status(500).json({ Status: false, Error: "Failed to insert estate." });
        }
        return res.json({ Status: true });
    });
});

// INSERT POST IMAGES
router.post("/add-post-images", upload.array('estate_images_name', 4), (req, res) => {
    console.log("Received form data:", req.body);
    console.log("Received file data:", req.files);

    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ Status: false, Error: "No files uploaded." });
    }

    const estate_id = req.body.estate_id;
    const fileNames = req.files.map(file => file.filename);

    const sql = "INSERT INTO estate_images (estate_images_name, estate_id) VALUES ?";
    const values = fileNames.map(fileName => [fileName, estate_id]);

    con.query(sql, [values], (err, result) => {
        if (err) {
            console.error("Error inserting estate images:", err);
            return res.status(500).json({ Status: false, Error: "Failed to insert estate images." });
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

//STAFF
router.get('/staff', (req, res) => {
    const sql = "SELECT * FROM staff";
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

//OWNERS
router.get('/owners', (req, res) => {
    const sql = "SELECT * FROM owners";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

//COMBINED ESTATE, POST, POST DETAILS, ESTATE IMAGES,
router.get('/combined-estates', (req, res) => {
    const sql = `
        SELECT 
            e.*,            -- All columns from estate
            p.*,            -- All columns from post
            pd.*,           -- All columns from post_details
            ei.estate_images_id,
            ei.estate_images_name
        FROM 
            estate e
        LEFT JOIN 
            post p ON e.estate_id = p.estate_id
        LEFT JOIN 
            post_details pd ON p.post_id = pd.post_id
        LEFT JOIN 
            estate_images ei ON e.estate_id = ei.estate_id
    `;
    
    con.query(sql, (err, result) => {
        if (err) {
            console.error("Query Error:", err);
            return res.json({ Status: false, Error: "Query Error" });
        }
        
        // Organize the result into an object where each estate has an array of images
        const estates = {};
        result.forEach(row => {
            const estateId = row.estate_id;
            if (!estates[estateId]) {
                estates[estateId] = {
                    ...row,
                    images: []
                };
            }
            if (row.estate_images_id) {
                estates[estateId].images.push({
                    estate_images_id: row.estate_images_id,
                    estate_images_name: row.estate_images_name
                });
            }
            // Remove individual image columns from the estate object
            delete row.estate_images_id;
            delete row.estate_images_name;
        });

        // Convert the object to an array of estates
        const finalResult = Object.values(estates);

        return res.json({ Status: true, Result: finalResult });
    });
});

//COMBINED ESTATE, POST, POST DETAILS, ESTATE IMAGES AND AGENT
router.get('/combined-estates-agent', (req, res) => {
    const sql = `
        SELECT 
            e.*,            -- All columns from estate
            p.*,            -- All columns from post
            pd.*,           -- All columns from post_details
            ei.estate_images_id,
            ei.estate_images_name,
            s.staff_id as agent_id,
            s.staff_name as agent_name,
            s.staff_surname as agent_surname,
            s.staff_email as agent_email,
            s.staff_phone as agent_phone,
            s.staff_avatar as agent_avatar
        FROM 
            estate e
        LEFT JOIN 
            post p ON e.estate_id = p.estate_id
        LEFT JOIN 
            post_details pd ON p.post_id = pd.post_id
        LEFT JOIN 
            estate_images ei ON e.estate_id = ei.estate_id
        LEFT JOIN
            staff s ON e.staff_group_id = s.staff_group_id
    `;
    
    con.query(sql, (err, result) => {
        if (err) {
            console.error("Query Error:", err);
            return res.json({ Status: false, Error: "Query Error" });
        }
        
        // Initialize an object to store estates with images
        const estates = {};

        // Iterate over each row in the result
        result.forEach(row => {
            const estateId = row.estate_id;

            // If the estate is not yet in the estates object, initialize it
            if (!estates[estateId]) {
                estates[estateId] = {
                    ...row,
                    images: [],  // Initialize an array to store images
                    agent: {     // Add agent details directly
                        agent_id: row.agent_id,
                        agent_name: row.agent_name,
                        agent_surname: row.agent_surname,
                        agent_email: row.agent_email,
                        agent_phone: row.agent_phone,
                        agent_avatar: row.agent_avatar
                    }
                };
            }

            // If there are images associated with the current row, add them to the estate's images array
            if (row.estate_images_id) {
                estates[estateId].images.push({
                    estate_images_id: row.estate_images_id,
                    estate_images_name: row.estate_images_name,
                    estate_id: estateId  // Add estate_id to each image object
                });
            }
        });

        // Convert the estates object into an array of estates
        const finalResult = Object.values(estates);

        return res.json({ Status: true, Result: finalResult });
    });
});

//FOR ONE ESTATE - Id
router.get('/combined-estates-agent/:id', (req, res) => {
    const estateId = req.params.id;  // Retrieve estate_id from URL parameter
    
    const sql = `
        SELECT 
            e.*,            -- All columns from estate
            p.*,            -- All columns from post
            pd.*,           -- All columns from post_details
            ei.estate_images_id,
            ei.estate_images_name,
            s.staff_id as agent_id,
            s.staff_name as agent_name,
            s.staff_surname as agent_surname,
            s.staff_email as agent_email,
            s.staff_phone as agent_phone,
            s.staff_avatar as agent_avatar
        FROM 
            estate e
        LEFT JOIN 
            post p ON e.estate_id = p.estate_id
        LEFT JOIN 
            post_details pd ON p.post_id = pd.post_id
        LEFT JOIN 
            estate_images ei ON e.estate_id = ei.estate_id
        LEFT JOIN
            staff s ON e.staff_group_id = s.staff_group_id
        WHERE
            e.estate_id = ?
    `;
    
    con.query(sql, [estateId], (err, result) => {
        if (err) {
            console.error("Query Error:", err);
            return res.json({ Status: false, Error: "Query Error" });
        }
        
        if (result.length === 0) {
            return res.json({ Status: false, Error: "Estate not found" });
        }
        
        // Process the result as before
        const estateData = result[0]; // Since only one estate should be returned
        
        // Construct the response object as needed
        const estate = {
            ...estateData,
            images: [],  // Initialize an array to store images
            agent: {     // Add agent details directly
                agent_id: estateData.agent_id,
                agent_name: estateData.agent_name,
                agent_surname: estateData.agent_surname,
                agent_email: estateData.agent_email,
                agent_phone: estateData.agent_phone,
                agent_avatar: estateData.agent_avatar
            }
        };

        // If there are images associated with the estate, add them to the images array
        result.forEach(row => {
            if (row.estate_images_id) {
                estate.images.push({
                    estate_images_name: row.estate_images_name,
                });
            }
        });

        return res.json({ Status: true, Result: estate });
    });
});


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

//DELETE ROUTES
//AGENT
router.delete("/delete-agent/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM staff where staff_id = ?"
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

//ADMIN
router.delete("/delete-admin/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM admin where admin_id = ?"
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

//MANAGER
router.delete("/delete-manager/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM manager WHERE manager_id = ?";
    
    console.log(`Attempting to delete manager with id: ${id}`);  // Log the manager id being deleted

    con.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Query Error: ", err);  // Log the exact error
            return res.json({ Status: false, Error: "Query Error" });
        }
        console.log("Delete Result: ", result);  // Log the result of the query
        return res.json({ Status: true, Result: result });
    });
});


//EDIT ROUTES
//AGENT
router.get("/agents/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM staff WHERE staff_id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

router.put("/edit-agent/:id", (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE staff set staff_name = ?, staff_surname = ?, staff_email = ?, staff_password = ?, staff_address = ?, staff_phone = ? Where staff_id = ?`
    const values = [
        req.body.staff_name,
        req.body.staff_surname,
        req.body.staff_email,
        req.body.staff_password,
        req.body.staff_address,
        req.body.staff_phone,
        id,
    ]
    con.query(sql, values, (err, result) => {
        if (err) return res.json({ Status: false, Error: err })
        return res.json({ Status: true })
    })
})

//MANAGER
router.get("/managers/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM manager WHERE manager_id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

router.put("/edit-manager/:id", (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE manager set manager_name = ?, manager_surname = ?, manager_address = ?, manager_phone = ?, manager_fax = ?, manager_pay = ? Where manager_id = ?`
    const values = [
        req.body.manager_name,
        req.body.manager_surname,
        req.body.manager_address,
        req.body.manager_phone,
        req.body.manager_fax,
        req.body.manager_pay,
        id,
    ]
    con.query(sql, values, (err, result) => {
        if (err) return res.json({ Status: false, Error: err })
        return res.json({ Status: true })
    })
})

//GET COUNTS
//ESTATE COUNT
router.get("/estates-count", (req, res) => {
    const sql = "SELECT count(estate_id) as estate_count from estate";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

//USER ROUTES
router.post("/user-login", (req, res) => {
    const sql = "SELECT * FROM users WHERE user_email = ? AND user_password = ?";
    con.query(sql, [req.body.user_email, req.body.user_password], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "Query error" });
        if (result.length > 0) {
            const user = result[0];
            const token = jwt.sign(
                { id: user.user_id, email: user.user_email, name: user.user_name_surname, avatar: user.user_avatar, role: "user" },
                "jwt_secret_key",
                { expiresIn: "1d" }
              );
              res.cookie("token", token);
            return res.json({ loginStatus: true, user: {id: user.user_id, name: user.user_name_surname, avatar: user.user_avatar } });
        } else return res.json({ loginStatus: false, Error: "Wrong email or password" });
    });
});

router.get("/logout", (req, res) => {
    res.clearCookie("token")
    return res.json({ Status: true })
})

//CREATE NEW USER
router.post("/user-login", (req, res) => {
    const sql = "SELECT * FROM users WHERE user_email = ? AND user_password = ?";
    con.query(sql, [req.body.user_email, req.body.user_password], (err, result) => {
        if (err) {
            console.error("Database query error:", err);
            return res.json({ loginStatus: false, Error: "Query error" });
        }
        
        if (result.length > 0) {
            const user = result[0];
            console.log("User found:", user); // Log the user object to inspect
            
            const token = jwt.sign(
                { 
                    id: user.user_id,
                    email: user.user_email,
                    name: user.user_name_surname,
                    avatar: user.user_avatar,
                    role: "user" 
                },
                "jwt_secret_key",
                { expiresIn: "1d" }
            );
            
            res.cookie("token", token);
            return res.json({ 
                loginStatus: true, 
                user: {
                    id: user.user_id,
                    name: user.user_name_surname,
                    avatar: user.user_avatar 
                } 
            });
        } else {
            console.log("No user found or wrong email/password.");
            return res.json({ loginStatus: false, Error: "Wrong email or password" });
        }
    });
});

//UPDATE USER
router.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM users WHERE user_id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

router.put("/edit-user/:id", (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE users set user_name_surname = ?, user_address = ?, user_phone = ?, user_fax = ?, user_estate_type = ?, user_space = ?, user_max_rent = ?, user_email = ?, user_password = ? Where user_id = ?`
    const values = [
        req.body.user_name_surname,
        req.body.user_address,
        req.body.user_phone,
        req.body.user_fax,
        req.body.user_estate_type,
        req.body.user_space,
        req.body.user_max_rent,
        req.body.user_email,
        req.body.user_password,
        id,
    ]
    con.query(sql, values, (err, result) => {
        if (err) return res.json({ Status: false, Error: err })
        return res.json({ Status: true })
    })
})

export { router as adminRouter }