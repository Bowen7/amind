import { clsx } from 'clsx'
import { useAtomValue, useSetAtom } from 'jotai'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { newPageDialogOpenAtom, sidebarCollapsedAtom } from '@/store'

export const Sidebar = () => {
  const collapsed = useAtomValue(sidebarCollapsedAtom)
  const setOpen = useSetAtom(newPageDialogOpenAtom)
  return (
    <aside className={clsx('border-r h-full transition-width overflow-hidden flex flex-col', collapsed ? 'w-0' : 'w-64')}>
      <h1 className="font-bold text-center py-4">AMind</h1>
      <ScrollArea className="flex-1">
        <div></div>
      </ScrollArea>
      <div className="p-4 flex justify-center">
        <Button className="w-full" variant="secondary" onClick={() => setOpen(true)}>
          Create New Page
        </Button>
      </div>
    </aside>
  )
}
