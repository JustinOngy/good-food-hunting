// we want to create a dummy user so we can build the login 
// functionalilty 

// we run by manually running  the script in the terminal
// using node create_dummy_users.js


const pg = require("pg");
const bcrypt = require("bcrypt");

const db = new pg.Pool({
  database: "goodfoodhunting",
});

const email = "dt@ga.co";
const password = "pudding";
const saltRounds = 10;

const sql = `
INSERT INTO users (email, password_digest)
VALUES ($1, $2);
`;

//1. Generate some salt - Salt is a random piece of data that is generated uniquely for each user
//2. Hash the password with the salt
//3. Insert user & hashed password into database

bcrypt.genSalt(saltRounds, function (err, salt) {
  bcrypt.hash(password, salt, function (err, hash) {
    // Store hash in your password DB.
    db.query(sql, [email, hash], (err, dbRes) => {
      if (err) {
        console.log(err);
      } else {
        console.log("user created");
      }
    });
  });
});
