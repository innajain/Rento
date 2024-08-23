'use server'
import jwt from 'jsonwebtoken';

const secretKey = 'your-secret-key'; 

export async function generateJwtToken(payload: object) {
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
}