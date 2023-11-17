const config = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root", // Ganti dengan username MySQL Anda
      password: "", // Ganti dengan password MySQL Anda
      database: "db_next_kang_avip",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
  production: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root", // Ganti dengan username MySQL Anda
      password: "", // Ganti dengan password MySQL Anda
      database: "db_next_kang_avip",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
  test: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root", // Ganti dengan username MySQL Anda
      password: "", // Ganti dengan password MySQL Anda
      database: "db_next_kang_avip",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  }
};

export default config