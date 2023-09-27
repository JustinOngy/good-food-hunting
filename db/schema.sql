CREATE DATABASE goodfoodhunting;
--  conect to the database before creating the table 
--    \c goodfoodhunting

CREATE TABLE dishes(
    id SERIAL PRIMARY KEY,
    title TEXT, 
    image_url TEXT,
    USER_ID INTEGER NOT NULL
);


ALTER TABLE dishes ADD COLUMN user_id INTEGER NOT NULL;

-- check the tables have been created
--    \dt
-- seeding some inital records


INSERT INTO dishes (title, image_url)
VALUES ("Chocolate Cake","https://www.recipetineats.com/wp-content/uploads/2018/03/Chocolate-Cake_9-SQ.jpg")

INSERT INTO dishes (title, image_url)
VALUES ("Fish and chips","https://foodhub.scene7.com/is/image/woolworthsltdprod/1907-fast-fish-and-chips:Square-1300x1300")

INSERT INTO dishes (title, image_url)
VALUES ("Pasta","https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Pasta-alla-vodka-f1d2e1c.jpg")




CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password_digest TEXT
);

INSERT INTO users (email)
VALUES ('dt@gmail.co');