import { useState } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { ReloadIcon } from '@radix-ui/react-icons'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { fsAtom, newPageDialogOpenAtom } from '@/store'

export const NewPageDialog = () => {
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useAtom(newPageDialogOpenAtom)
  const fs = useAtomValue(fsAtom)!
  const onCreate = async () => {
    setIsLoading(true)
    await fs.promises.writeFile(`${name}.amind`, '')
    setIsLoading(false)
    setOpen(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Page</DialogTitle>
          <DialogDescription>
            Create a new page to start
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Page Name
            </Label>
            <Input id="name" value={name} onChange={e => setName(e.target.value)} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onCreate} disabled={isLoading}>
            {isLoading && <ReloadIcon className="w-4 h-4 animate-spin" />}
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
