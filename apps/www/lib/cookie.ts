import { cookies } from 'next/headers'

export const cookie = <T>(name: string, defaultValue: T): T => {
  const cookie = cookies().get(name)
  try {
    return cookie ? JSON.parse(cookie.value) : defaultValue
  // eslint-disable-next-line unused-imports/no-unused-vars
  } catch (error) {
    return defaultValue
  }
}
