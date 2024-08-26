import { clsx } from 'clsx'
import { ScrollArea } from '#ui/scroll-area'

type Props = {
  collapsed: boolean
}

export const Sidebar = ({ collapsed }: Props) => {
  return (
    <aside className={clsx('border-r h-full transition-width overflow-hidden py-4', collapsed ? 'w-0' : 'w-64')}>
      <h1 className="font-bold text-center">AMind</h1>
      <ScrollArea className="h-full">
        <div className="h-[2000px]"></div>
      </ScrollArea>
    </aside>
  )
}
