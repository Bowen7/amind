import { Outlet } from 'react-router-dom'
import useSWR from 'swr'
import { useAtomValue } from 'jotai'
import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { NewPageDialog } from '@/components/new-page-dialog'
import { fsAtom } from '@/store'

export const MainShell = () => {
  const fs = useAtomValue(fsAtom)!
  const { data: files = [] } = useSWR('pages', () => fs.promises.readdir('/'))
  const pages = files.filter(file => (file as string).endsWith('.amind'))
  console.log(pages)
  return (
    <div className="h-screen overflow-hidden flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <NewPageDialog />
    </div>
  )
}
