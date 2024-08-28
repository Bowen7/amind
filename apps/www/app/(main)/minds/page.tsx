import { COOKIE_NAMES } from '@amind/config'
import { cookies } from 'next/headers'
import type { PageRecordModel } from '@amind/types'
import { cookie } from '@/lib/cookie'
import { createServerClient } from '@/lib/client'

export default async function MindsPage() {
  const cookieStore = cookies()

  const client = createServerClient(cookieStore)
  const model = client.authStore.model
  const pages = await client.collection('pages').getFullList<PageRecordModel>({
    filter: `user = "${model?.id}"`,
  })
  const lastVisitedPageId = cookie(cookieStore, COOKIE_NAMES.AMIND_LAST_VISITED_PAGE_ID, '')
  const lastVisitedPage = pages.find(page => page.id === lastVisitedPageId) || pages[0] || null

  return (
    <div>
      {lastVisitedPage && <h1>{lastVisitedPage.title}</h1>}
    </div>
  )
}
