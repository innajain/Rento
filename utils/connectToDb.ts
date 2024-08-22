'use server'
import mysql from 'mysql2/promise';
export const connectToDb = async () => {
  const pool = mysql.createPool({
    host: 'srv1641.hstgr.io',
    user: 'u449426905_rento', 
    password: 'Rpsrento123', 
    database: 'u449426905_rento_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  return pool;
};