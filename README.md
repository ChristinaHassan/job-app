# Job App

A small full-stack app that matches users to jobs based on their skills.

---

## My Stack

- **Backend:** Node.js + Express + PostgreSQL
- **Frontend:** Angular + NgRx + Tailwind CSS
- **Auth:** JWT

---

## What is Needed

- **Node.js** v20+
- **PostgreSQL** v14+ — `psql` must be on PATH
  - Windows: add `C:\Program Files\PostgreSQL\<version>\bin` to PATH, then restart your terminal
- **npm**

---

## Backend setup

```bash
npm install
# do not delete my .env just change with your data and paths
npm run setup #it will install the database and insert the dummy data
npm run dev
```

Backend runs on **http://localhost:3000**.

---

## Frontend setup

```bash

npm install
ng serve
```

Frontend runs on **http://localhost:4200**.

---

## Try the app

1. Open **http://localhost:4200**
2. Register a **new account**
3. Pick a few skills → save
4. View matching jobs

---

---

## My approach
The above stack was chosen based on my experience.
I approached the problem by creating the backend first and then the frontend.
I started from the DBeaver while checking if the *.sql files where correct.
Then I tackled the backend.
The next step was the frontend starting from the general components, the services and the store.
When the app was ready I tried to make the setup process as automated as posible.


## App structure

```
job-app/
├── backend/
│   ├── db/                  # schema.sql + seed.sql
│   └── src/
│       ├── config/          # DB connection
│       ├── middleware/      # JWT verification
│       ├── routes/          # URL → controller
│       ├── controllers/     # request/response
│       └── services/        # business logic + DB
└── frontend/
    └── src/app/
        ├── core/            # services, interceptors, guards
        ├── store/           # NgRx (auth, skills, jobs)
        └── components/      # pages + shared header
```
