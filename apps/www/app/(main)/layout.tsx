import { MainShell } from '@amind/components/main-shell'
import { COOKIE_NAMES } from '@amind/config'
import { cookies } from 'next/headers'
import type { PageRecordModel } from '@amind/types'
import { cookie } from '@/lib/cookie'
import { createServerClient } from '@/lib/client'

type Props = {
  children: React.ReactNode
}

export default async function MindsPage({ children }: Props) {
  const cookieStore = cookies()
  const sidebarCollapsed = cookie(cookieStore, COOKIE_NAMES.AMIND_SIDEBAR_COLLAPSED, false)

  const client = createServerClient(cookieStore)
  const model = client.authStore.model
  const pages = await client.collection('pages').getFullList<PageRecordModel>({
    filter: `user = "${model?.id}"`,
  })

  return (
    <MainShell
      defaultSidebarCollapsed={sidebarCollapsed}
      pages={pages}
    >
      {children}
    </MainShell>
  )
}
