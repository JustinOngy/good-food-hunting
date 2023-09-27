const { Pool } = require("pg");

// Configure the PostgreSQL connection
const pool = new Pool({
  database: "goodfoodhunting",
  port: 5432,
});

// Define the dummy dishes data
const dummyDishes = [
  ["Arepas", "arepas.jpg", "EXISTING_USER_ID_1"],
  // Add more dishes here
];

// Define the SQL query to insert dishes
const insertQuery =
  "INSERT INTO dishes (name, image, user_id) VALUES ($1, $2, $3)";

// Function to seed the database
async function seedDatabase() {
  const client = await pool.connect();

  try {
    for (const [name, image, userId] of dummyDishes) {
      await client.query(insertQuery, [name, image, userId]);
    }
    console.log("Dummy dishes seeded successfully.");
  } catch (err) {
    console.error("Error seeding dishes:", err);
  } finally {
    client.release();
    await pool.end();
  }
}

seedDatabase();
