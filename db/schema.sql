CREATE DATABASE IF NOT EXISTS pizza_db;

USE pizza_db;

CREATE TABLE pizza_orders (
    id INT NOT NULL AUTO INCREMENT,
    pizza_name VARCHAR(50),
    crust VARCHAR(20),
    veggie BOOLEAN,
    picked_up BOOLEAN
)