import { useSetAtom } from 'jotai'
import { set } from 'idb-keyval'
import { Button } from '@/components/ui/button'
import { fsDirHandleAtom } from '@/store'
import { IDB_KEYS } from '@/config/storage'

export const PickDirectory = () => {
  const setFsDirHandle = useSetAtom(fsDirHandleAtom)
  const onClick = () => {
    showDirectoryPicker({
      mode: 'readwrite',
      id: 'pick-directory',
    }).then(async (dirHandle) => {
      if (dirHandle) {
        await set(IDB_KEYS.FS_DIR_HANDLE, dirHandle)
        setFsDirHandle(dirHandle)
      }
    })
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <Button variant="secondary" onClick={onClick}>
        Pick Directory
      </Button>
    </div>
  )
}
