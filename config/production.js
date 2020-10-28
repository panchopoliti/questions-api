module.exports = {
  db: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { 
        rejectUnauthorized: false, 
      },
    },
    migrations: {
      tableName: 'migrations',
      directory: 'migrations',
    },
  },
};
