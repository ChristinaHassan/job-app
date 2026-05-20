drop table if exists users cascade;
create table users        
(
id serial primary key,
email varchar not null,
password_hash varchar not null,
created_at timestamp default now()
);


create table skills
(
id serial primary key,
name varchar not null unique
);


create table jobs        
(
id serial primary key,
title varchar not null,
description varchar
);


create table user_skills   
(
    users_id int,
    skills_id int,
    constraint pk_user_skills primary key (users_id, skills_id),
    constraint fk_user_skills_user foreign key (users_id) references users(id) on delete cascade,
    constraint fk_user_skills_skill foreign key (skills_id) references skills(id) on delete cascade
);

create table job_skills 
(
    job_id int,
    skill_id int,
    constraint pk_job_skills primary key (job_id, skill_id),
    constraint fk_job_skills_job foreign key (job_id) references jobs(id) on delete cascade,
    constraint fk_job_skills_skill foreign key (skill_id) references skills(id) on delete cascade
);