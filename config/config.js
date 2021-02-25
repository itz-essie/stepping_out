require("dotenv").config();
module.exports=
{
  "development": {
    "username": "root",
    "password": 'PenthouseF2018!',
    "database": "date_ideas",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "date_ideas",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
