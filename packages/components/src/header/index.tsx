'use client'
import { Sidebar as SidebarIcon } from '@phosphor-icons/react'
import { Button } from '#ui/button'

type Props = {
  onSidebarToggle: () => void
}

export const Header = ({ onSidebarToggle }: Props) => {
  return (
    <div className="h-14 border-b flex items-center px-4 space-x-2">
      <Button variant="ghost" size="icon" className="w-8 h-8" onClick={onSidebarToggle}>
        <SidebarIcon className="h-4 w-4" />
      </Button>
      <div>Header</div>
    </div>
  )
}
