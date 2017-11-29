const {
  SECRET, DB_HOST, DB_PORT, DATABASE,
} = process.env;

module.exports = {
  secret: SECRET,
  database: `mongodb://${DB_HOST}:${DB_PORT}/${DATABASE}`,
};
