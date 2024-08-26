'use client'

import { useCallback, useState } from 'react'
import { COOKIE_NAMES } from '@amind/config'
import { Sidebar } from '#sidebar'
import { Header } from '#header'

type Props = {
  children: React.ReactNode
  defaultSidebarCollapsed: boolean
}

export const MainLayout = ({ children, defaultSidebarCollapsed }: Props) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(defaultSidebarCollapsed)

  const onSidebarToggle = useCallback(() => {
    setSidebarCollapsed((v) => {
      document.cookie = `${COOKIE_NAMES.AMIND_SIDEBAR_COLLAPSED}=${!v}`
      return !v
    })
  }, [])

  return (
    <div className="h-screen overflow-hidden flex">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className="flex-1 flex flex-col">
        <Header onSidebarToggle={onSidebarToggle} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
