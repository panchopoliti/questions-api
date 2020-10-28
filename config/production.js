module.exports = {
  db: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: {
      tableName: 'migrations',
      directory: 'migrations',
    },
  },
};
