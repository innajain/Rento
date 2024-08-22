'use server'

import {jwtDecode} from 'jwt-decode';
import { generateJwtToken } from './generateToken';
import { connectToDb } from '@/utils/connectToDb';
import { ResultSetHeader } from 'mysql2';

export type GoogleOAuthToken = {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email?: string;
  email_verified?: boolean;
  nbf: number;
  name?: string;
  picture?: string;
  given_name?: string;
  family_name?: string;
  iat: number;
  exp: number;
  jti: string;
};

export const handleOAuthGoogleLogin = async (response: any) => {
  const token = response.credential;
  const decoded: GoogleOAuthToken = jwtDecode(token);

  if (decoded.email_verified) {
    try {
      const pool = await connectToDb();
      const [rows] = await pool.query<any[]>('SELECT * FROM users WHERE email = ?', [decoded.email]);
      if (rows.length > 0) {
        const userId = rows[0].id;
        const token = await generateJwtToken({ userId });
        return token
      } else {
        const newUser = {
          email: decoded.email,
          name: decoded.given_name + ' ' + decoded.family_name,
          picture: decoded.picture,
        };

        const [result] = await pool.query<ResultSetHeader>('INSERT INTO users SET ?', newUser);
        const userId = result.insertId;
        const token = generateJwtToken({ userId });
        return token
      }
    } catch (error) {
      console.error('Error handling OAuth login:', error);
    }
  }
};