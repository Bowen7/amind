import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

export const cookie = <T>(cookieStore: ReadonlyRequestCookies, name: string, defaultValue: T): T => {
  const cookie = cookieStore.get(name)
  try {
    return cookie ? JSON.parse(cookie.value) : defaultValue
  // eslint-disable-next-line unused-imports/no-unused-vars
  } catch (error) {
    return defaultValue
  }
}
