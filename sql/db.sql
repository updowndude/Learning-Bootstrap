-- makes the database
-- drop database if its there
-- drop database if exists cwinkebt_learningBootsrap;
-- create database cwinkebt_learningBootsrap;
use cwinkebt_learningBootsrap;

-- build the tables
create table info (
	info_id int auto_increment primary key,
    fname varchar(50) not null,
    lname varchar(50) not null,
    experience varchar(10),
    favorite varchar(20) not null,
    message varchar(1000)
);

create table checkboxs (
	checkbox_id int auto_increment primary key,
    name_checkBox varchar(20),
    value_checkbox boolean,
    info_id int,
	constraint fk_info foreign key (info_id) references info(info_id)
);
