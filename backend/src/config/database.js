module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'tasklist',
  password: 'admin',
  database: 'tasklist',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
