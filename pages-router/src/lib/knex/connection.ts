// db.js (atau nama file yang sesuai)
import knex from "knex";
import knexConfig from "@/lib/knex/config";

const environment = process.env.NODE_ENV || "development";
const db = knex(knexConfig[environment]);

export default db;
