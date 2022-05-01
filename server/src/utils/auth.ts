import * as jwt from 'jsonwebtoken'

export const APP_SECRET = "some_not_random_secret_that_is_at_least_32_characters";

export interface AuthTokenPayload {
  userId: number
}

export function decodeAuthHeader(authHeader: String): AuthTokenPayload {
  const token = authHeader.replace('Bearer ', '')

  if (!token) {
    throw new Error('No token found')
  }
  return jwt.verify(token, process.env.APP_SECRET) as AuthTokenPayload
}
