module.exports = {
  db: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'migrations',
      directory: 'migrations',
    },
  },
};
