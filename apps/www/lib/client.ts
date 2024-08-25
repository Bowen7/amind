import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import PocketBase from 'pocketbase'

export function createServerClient(cookieStore?: ReadonlyRequestCookies) {
  if (typeof window !== 'undefined') {
    throw new TypeError(
      'This method is only supposed to call from the Server environment',
    )
  }

  const client = new PocketBase('https://pocketbase.amind.app')

  if (cookieStore) {
    const authCookie = cookieStore.get('pb_auth')

    if (authCookie) {
      client.authStore.loadFromCookie(`${authCookie.name}=${authCookie.value}`)
    }
  }

  return client
}
