const Database = require('config')

Database()

Database.exec(`CREATE TABLE profile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    avatar TEXT,
    monthly_budget INT,
    days_per_week INT, 
    hours_per_day INT,
    vacation_per_year INT,
    value_hour INT
)`);

Database.exec(`CREATE TABLE jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    daily_hours INT,
    total_hours INT,
    created_at DATETIME 
)`)

Database.run(`INSERT INTO profile (
    name, 
    avatar,
    monthly_budget,
    days_per_week,
    hours_per_day,
    vacation_per_year,
) VALUES (
    "Joao",
    "htpps://github.com/jvmineiro.png",
    3000,
    5,
    5,
    4,
);`)
 
Database.close()

// INSERT INTO jobs (
//     name.
//     daily_hours,

// )