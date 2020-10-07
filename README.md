# Questions Api

Made to connect with [Quiz Questions projects](https://github.com/panchopoliti/browser-question-game)

## Setup
```
# Connect to postgres in Superuser role (or Create Role attribute) 
psql postgres

# Create Postgres Role
CREATE ROLE questions_db WITH LOGIN CREATEDB

# Create Postgres database
createdb -O questions_db questions_game

# Test connection. Exit with \q
psql questions_game questions_db

# Install dependencies 
npm install

# Generate database
knex migrate:latest 
```

## Run
```
# To run locally
npm install -g nodemon && npm start
```

## Node version
\>= 10

## Postgres version
\>= 12

## Technologies Used
Knex JS
Express JS
