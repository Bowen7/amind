import { Sidebar as SidebarIcon } from '@phosphor-icons/react'
import { useSetAtom } from 'jotai'
import { Button } from '@/components/ui/button'
import { sidebarCollapsedAtom } from '@/store'

export const Header = () => {
  const setSidebarCollapsed = useSetAtom(sidebarCollapsedAtom)

  return (
    <div className="h-14 border-b flex items-center px-4 space-x-2">
      <Button variant="ghost" size="icon" className="w-8 h-8" onClick={() => setSidebarCollapsed(v => !v)}>
        <SidebarIcon className="h-4 w-4" />
      </Button>
      <div>Header</div>
    </div>
  )
}
