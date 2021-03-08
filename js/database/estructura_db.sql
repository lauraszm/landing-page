/*base de datos relacional - mariadb*/
CREATE TABLE users(
usr_login int not null,
usr_name varchar(255) not null,
usr_mail varchar(255) not null,
usr_telephone int,
administrator boolean not null,
primary key (usr_login));

CREATE TABLE events(
event_id_auto int not null AUTO_INCREMENT,
event_name varchar(255),
event_description varchar(2000),
event_day timestamp not null,
primary key (event_id));

CREATE TABLE inscriptions(
inscription_id int not null AUTO_INCREMENT,
usr_login int not null,
event_id int not null,
primary key (inscription_id),
FOREIGN KEY (usr_login) REFERENCES users(usr_login),
FOREIGN KEY (event_id) REFERENCES events(event_id));

insert into users values('42631651','Diego Menendez','dmenendez@st.com.uy','598656427', false);--
insert into events values(1,'Event NodeJS','descripcion','2021-04-21 15:00:00');--
insert into inscriptions(usr_login,event_id) values('42631651',1);--