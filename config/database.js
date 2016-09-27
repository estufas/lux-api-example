export default {
  development: {
    driver: 'sqlite3',
    database: 'apiTester_dev'
  },

  test: {
    driver: 'sqlite3',
    database: 'apiTester_test'
  },

  production: {
    driver: 'sqlite3',
    database: 'apiTester_prod'
  }
};
