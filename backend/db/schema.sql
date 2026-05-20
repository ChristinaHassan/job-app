drop table if existsuser_skills CASCADE;
drop table if existsjob_skills CASCADE;
drop table if existsusers CASCADE;
drop table if existsskills CASCADE;
drop table if existsjobs CASCADE;
create table users        
(
id serial primary key,
email varchar not null unique,
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
    user_id int,
    skill_id int,
    constraint pk_user_skills primary key (user_id, skill_id),
    constraint fk_user_skills_user foreign key (user_id) references users(id) on delete cascade,
    constraint fk_user_skills_skill foreign key (skill_id) references skills(id) on delete cascade
);

create table job_skills 
(
    job_id int,
    skill_id int,
    constraint pk_job_skills primary key (job_id, skill_id),
    constraint fk_job_skills_job foreign key (job_id) references jobs(id) on delete cascade,
    constraint fk_job_skills_skill foreign key (skill_id) references skills(id) on delete cascade
);