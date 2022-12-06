-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS tools;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS purchases;
-- Your code here
CREATE TABLE departments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE tools (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(4,2) NOT NULL,
    department REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone_number INTEGER NOT NULL
);

CREATE TABLE purchases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quantity INTEGER,
    tool_id REFERENCES tools(id) ON DELETE CASCADE,
    customer_id REFERENCES customers(id) ON DELETE CASCADE
);
