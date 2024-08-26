import { MainLayout } from '@amind/components/main-layout'
import { COOKIE_NAMES } from '@amind/config'
import { cookie } from '@/lib/cookie'

export default function MindsPage() {
  const sidebarCollapsed = cookie(COOKIE_NAMES.AMIND_SIDEBAR_COLLAPSED, false)

  return (
    <MainLayout defaultSidebarCollapsed={sidebarCollapsed}>
      <div>content</div>
    </MainLayout>
  )
}
