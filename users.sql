-- Creates Users table
CREATE TABLE Users (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username varchar(40) NOT NULL,
    password varchar(50) NOT NULL,
    created_at  DATETIME
);

