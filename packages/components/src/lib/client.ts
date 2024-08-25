import PocketBase from 'pocketbase'

const createBrowserClient = () => {
  const client = new PocketBase('https://pocketbase.amind.app')
  if (typeof window !== 'undefined') {
    client.authStore.onChange(() => {
      document.cookie = client.authStore.exportToCookie({
        httpOnly: false,
      })
    })
  }
  return client
}

export const client = createBrowserClient()
