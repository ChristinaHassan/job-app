insert into skills (name)
values
    ('Angular'),
    ('React'),
    ('Vue'),
    ('Node.js'),
    ('Python'),
    ('Django'),
    ('Flask'),
    ('JavaScript'),
    ('TypeScript'),
    ('C#'),
    ('PHP'),
    ('Java');

insert into jobs (title, description) values
  ('Frontend Developer', 'Full time'),
  ('Backend Developer', 'Part time'),
  ('Full Stack Developer', 'Contract'),
  ('Data Scientist', 'Full time'),
  ('DevOps Engineer', 'Part time'),
  ('Mobile Developer', 'Contract'),
  ('QA Engineer', 'Full time'),
  ('Project Manager', 'Part time');

insert into job_skills (job_id, skill_id)
select j.id, s.id from jobs j, skills s
where (j.title = 'Frontend Developer' and s.name in ('Angular', 'JavaScript'))
  or (j.title = 'Backend Developer'  and s.name in ('Node.js', 'SQL'));
