create database goparkdb;
use goparkdb;
CREATE TABLE company (
    company_id INT NOT NULL AUTO_INCREMENT,
    company_name VARCHAR(50),
    company_contact INT,
    complex_id INT,
    company_username VARCHAR(50),
    company_password VARCHAR(50),
    PRIMARY KEY (company_id),
    FOREIGN KEY (complex_id) REFERENCES complex(complex_id)
);
CREATE TABLE complex (
    complex_id INT NOT NULL AUTO_INCREMENT,
    complex_name VARCHAR(50),
    complex_address VARCHAR(50),
    total_parking_levels INT,
    total_tenant_parking_levels INT,
    complex_username VARCHAR(50),
    complex_password VARCHAR(50),
    PRIMARY KEY (complex_id)
);



CREATE TABLE complex_subscription_payment (
    complex_subscription_payment_id INT NOT NULL AUTO_INCREMENT,
    complex_id INT,
    complex_subscription_payment_status VARCHAR(50),
    complex_subscription_payment_date_time TIMESTAMP,
    complex_subscription_payment_amount INT,
    PRIMARY KEY (complex_subscription_payment_id),
    FOREIGN KEY (complex_id) REFERENCES complex(complex_id)
);

CREATE TABLE parking_level (
    parking_level_id INT NOT NULL AUTO_INCREMENT,
    complex_id INT,
    level_number INT,
    parking_level_capacity INT,
    PRIMARY KEY (parking_level_id),
    FOREIGN KEY (complex_id) REFERENCES complex(complex_id)
);
CREATE TABLE parking_slot (
    parking_slot_id INT NOT NULL AUTO_INCREMENT,
    parking_level_id INT,
    slot_number INT,
    availability VARCHAR(50),
    PRIMARY KEY (parking_slot_id),
    FOREIGN KEY (parking_level_id) REFERENCES parking_level(parking_level_id)
);
CREATE TABLE parking_user (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(50),
    user_username VARCHAR(50),
    user_password VARCHAR(50),
    user_contact INT,
    user_mail VARCHAR(50),
    company_id INT,
    PRIMARY KEY (user_id),
    FOREIGN KEY (company_id) REFERENCES company(company_id)
);
CREATE TABLE parking_user_booking (
    booking_id INT NOT NULL AUTO_INCREMENT,
    user_id INT,
    parking_slot_id INT,
    booking_start_date_time TIMESTAMP,
    booking_end_date_time TIMESTAMP,
    booking_vehicle_type VARCHAR(50),
    booking_vehicle_plate_no VARCHAR(50),
    PRIMARY KEY (booking_id),
    FOREIGN KEY (user_id) REFERENCES parking_user(user_id),
    FOREIGN KEY (parking_slot_id) REFERENCES parking_slot(parking_slot_id)
);

 








