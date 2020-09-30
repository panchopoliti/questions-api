module.exports = {
  db: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'questions_db',
      password: '',
      database: 'questions_game',
    },
    migrations: {
      tableName: 'migrations',
      directory: 'migrations',
    },
  },
};
