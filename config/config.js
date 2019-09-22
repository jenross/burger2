module.exports = {
  "development": {
    "username": "process.env.MYSQL_USER",
    "password": "process.env.MYSQL_KEY",
    "database": "process.env.MYSQL_DBNAME",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "process.env.MYSQL_USER",
    "password": "process.env.MYSQL_KEY",
    "database": "process.env.MYSQL_DBNAME",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL", 
    "dialect": "mysql"
  }
}