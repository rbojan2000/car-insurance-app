insert into country (name, is_deleted) values ('Serbia', false)
insert into country (name, is_deleted) values ('Bosnia and Herzegovina', false)

insert into city (name, country_id, is_deleted) values ('Novi Sad', 1, false)
insert into city (name, country_id, is_deleted) values ('Beograd', 1, false)
insert into city (name, country_id, is_deleted) values ('Foca', 2, false)
insert into city (name, country_id, is_deleted) values ('Trebinje', 2, false)

insert into zip (zip_number, city_id, is_deleted) values (21000, 1, false)
insert into zip (zip_number, city_id, is_deleted) values (11000, 2, false)
insert into zip (zip_number, city_id, is_deleted) values (73302, 3, false)
insert into zip (zip_number, city_id, is_deleted) values (89101, 4, false)

insert into address (street, street_number, zip_id, is_deleted) values ('Balzakova', '1', 1, false)
insert into address (street, street_number, zip_id, is_deleted) values ('Knez Mihajlova', '1', 2, false)
insert into address (street, street_number, zip_id, is_deleted) values ('Focanska', '1', 3, false)
insert into address (street, street_number, zip_id, is_deleted) values ('Oslobodilacka', '1', 4, false)

insert into person (address_id, birth, contact_id, first_name, gender, is_deleted, jmbg, last_name, martial_status) values (null, '2012-06-18', null, "Marko", 'MALE', false, "1231231231231", "Markovic", 'MARRIED');
insert into person (address_id, birth, contact_id, first_name, gender, is_deleted, jmbg, last_name, martial_status) values (null, '2012-06-18', null, "Zarko", 'MALE', false, "117543023", "Petrovic", 'MARRIED');
insert into person (address_id, birth, contact_id, first_name, gender, is_deleted, jmbg, last_name, martial_status) values (null, '2012-06-18', null, "Mirko", 'MALE', false, "224803023", "Milic", 'MARRIED');
insert into person (address_id, birth, contact_id, first_name, gender, is_deleted, jmbg, last_name, martial_status) values (null, '2012-06-18', null, "Darko", 'MALE', false, "413285423", "Janjic", 'MARRIED');
insert into person (address_id, birth, contact_id, first_name, gender, is_deleted, jmbg, last_name, martial_status) values (null, '2012-06-18', null, "Milan", 'MALE', false, "013571323", "Milivojevic", 'MARRIED');
insert into person (address_id, birth, contact_id, first_name, gender, is_deleted, jmbg, last_name, martial_status) values (null, '2012-06-18', null, "Stefan", 'MALE', false, "216431023", "Tot", 'MARRIED');
insert into person (address_id, birth, contact_id, first_name, gender, is_deleted, jmbg, last_name, martial_status) values (null, '2012-06-18', null, "Marko", 'MALE', false, "172365323", "Markovic", 'MARRIED');
insert into person (address_id, birth, contact_id, first_name, gender, is_deleted, jmbg, last_name, martial_status) values (null, '2012-06-18', null, "Milos", 'MALE', false, "179328023", "Milosevic", 'MARRIED');
insert into person (address_id, birth, contact_id, first_name, gender, is_deleted, jmbg, last_name, martial_status) values (null, '2012-06-18', null, "Dejan", 'MALE', false, "199811123", "Desic", 'MARRIED');
insert into person (address_id, birth, contact_id, first_name, gender, is_deleted, jmbg, last_name, martial_status) values (null, '2012-06-18', null, "Milan", 'MALE', false, "9999539811123", "Males", 'MARRIED');
insert into person (address_id, birth, contact_id, first_name, gender, is_deleted, jmbg, last_name, martial_status) values (null, '2012-06-18', null, "Nemoj", 'MALE', false, "9999558811123", "Danas", 'MARRIED');

insert into subscriber (subscriber_role_id, id) values (null, 1);
insert into subscriber (subscriber_role_id, id) values (null, 2);
insert into subscriber (subscriber_role_id, id) values (null, 3);
insert into subscriber (subscriber_role_id, id) values (null, 4);
insert into subscriber (subscriber_role_id, id) values (null, 5);
insert into subscriber (subscriber_role_id, id) values (null, 6);
insert into subscriber (subscriber_role_id, id) values (null, 7);
insert into subscriber (subscriber_role_id, id) values (null, 8);
insert into subscriber (subscriber_role_id, id) values (null, 9);

insert into brand (is_deleted, name) values (false, "Aston Martin");
insert into brand (is_deleted, name) values (false, "McLaren");
insert into brand (is_deleted, name) values (false, "Ferrari");
insert into brand (is_deleted, name) values (false, "Rolls-Royce");
insert into brand (is_deleted, name) values (false, "Bentley");
insert into brand (is_deleted, name) values (false, "Mercedes");

insert into model (brand_id, is_deleted, name) values (1, false, "DB2/4");
insert into model (brand_id, is_deleted, name) values (1, false, "DB MKIII");
insert into model (brand_id, is_deleted, name) values (1, false, "DB4");
insert into model (brand_id, is_deleted, name) values (2, false, "Elva");
insert into model (brand_id, is_deleted, name) values (2, false, "Spider");
insert into model (brand_id, is_deleted, name) values (3, false, "GTC7");
insert into model (brand_id, is_deleted, name) values (3, false, "225S");
insert into model (brand_id, is_deleted, name) values (4, false, "Silver Ghost");
insert into model (brand_id, is_deleted, name) values (4, false, "Phantom");
insert into model (brand_id, is_deleted, name) values (4, false, "Wraith");
insert into model (brand_id, is_deleted, name) values (5, false, "L Mark V");
insert into model (brand_id, is_deleted, name) values (6, false, "AMG");
insert into model (brand_id, is_deleted, name) values (6, false, "GLK");

insert into car(model_id, year, is_deleted) values(1, 1992, false);
insert into car(model_id, year, is_deleted) values(2, 1983, false);
insert into car(model_id, year, is_deleted) values(3, 1943, false);
insert into car(model_id, year, is_deleted) values(4, 2020, false);
insert into car(model_id, year, is_deleted) values(5, 2022, false);
insert into car(model_id, year, is_deleted) values(6, 2023, false);
insert into car(model_id, year, is_deleted) values(7, 2021, false);
insert into car(model_id, year, is_deleted) values(8, 1954, false);
insert into car(model_id, year, is_deleted) values(9, 1944, false);
insert into car(model_id, year, is_deleted) values(10, 1982, false);
insert into car(model_id, year, is_deleted) values(11, 1982, false);

insert into proposal (proposal_status, is_deleted, creation_date) values ('INITIALIZED', false, '2012-06-18T10:34:09');
insert into proposal (proposal_status, is_deleted, creation_date, subscriber_id, car_id, licence_num) values ('CAR_ADDED', false, '2012-06-18T10:34:09', 1, 1, "123-R-123");

insert into driver (id) values (10);
insert into driver (id) values (8);
insert into driver (id) values (3);
insert into driver (id) values (4);

insert into insurance_item(amount, franchise_percentage, is_deleted, is_optional, name) values (5000.0, 10, false, false, "Property Damage");
insert into insurance_item(amount, franchise_percentage, is_deleted, is_optional, name) values (8000.0, 20, false, false, "Body Injury");
insert into insurance_item(amount, franchise_percentage, is_deleted, is_optional, name) values (6000.0, 30, false, false, "Medical Coverage");

insert into insurance_item(amount, franchise_percentage, is_deleted, is_optional, name) values (4000.0, 20, false, true, "Natural disasters");
insert into insurance_item(amount, franchise_percentage, is_deleted, is_optional, name) values (3000.0, 18, false, true, "Electrical wear and tear");

insert into insurance_plan(is_deleted, is_premium, name) values (false, false, "Basic Plan");
insert into insurance_plan(is_deleted, is_premium, name) values (false, true, "Advanced Premium Plan");

insert into insurance_items_insurance_plans(insurance_item_id, insurance_plan_id) values (1, 1);
insert into insurance_items_insurance_plans(insurance_item_id, insurance_plan_id) values (2, 1);
insert into insurance_items_insurance_plans(insurance_item_id, insurance_plan_id) values (3, 1);

insert into insurance_items_insurance_plans(insurance_item_id, insurance_plan_id) values (1, 2);
insert into insurance_items_insurance_plans(insurance_item_id, insurance_plan_id) values (2, 2);
insert into insurance_items_insurance_plans(insurance_item_id, insurance_plan_id) values (3, 2);
insert into insurance_items_insurance_plans(insurance_item_id, insurance_plan_id) values (4, 2);
insert into insurance_items_insurance_plans(insurance_item_id, insurance_plan_id) values (5, 2);


insert into risk(is_deleted, description) values (false, "Crash");
insert into risk(is_deleted, description) values (false, "Fast Driving");

insert into accident_history(is_deleted, time_happened, was_responsible, description, driver_id) values (false, '2012-06-18T10:34:09', false, "Crash", 3);
insert into accident_history(is_deleted, time_happened, was_responsible, description, driver_id) values (false, '2012-06-19T10:34:09', true, "Crash", 4);

insert into role(is_deleted, name) values (false, "ROLE_ADMIN");
insert into role(is_deleted, name) values (false, "ROLE_SALES_AGENT");

INSERT INTO user(email, enabled, is_deleted, password, person_id) VALUES( "salesagent@mail.com", true, false, "$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra", 9)
INSERT INTO user(email, enabled, is_deleted, password, person_id) VALUES( "admin@mail.com", true, false, "$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra", 10)

INSERT INTO user_role(user_id, role_id) VALUES (1, 2);
INSERT INTO user_role(user_id, role_id) VALUES (2, 1);

