import { useEffect } from 'react'
import { get } from 'idb-keyval'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { PickDirectory } from '@/components/pick-directory'
import { Loading } from '@/components/loading'
import { MainShell } from '@/components/main-shell'
import { IDB_KEYS } from '@/config/storage'
import { fsAtom, fsDirHandleAtom, isGlobalLoadingAtom } from '@/store'

export const Root = () => {
  const [isLoading, setIsLoading] = useAtom(isGlobalLoadingAtom)
  const setFsDirHandle = useSetAtom(fsDirHandleAtom)
  const fs = useAtomValue(fsAtom)

  useEffect(() => {
    let canceled = false
    get<FileSystemDirectoryHandle>(IDB_KEYS.FS_DIR_HANDLE).then((value) => {
      if (!canceled) {
        setFsDirHandle(value || null)
        setIsLoading(false)
      }
    })
    return () => {
      canceled = true
    }
  }, [setFsDirHandle, setIsLoading])

  return (
    isLoading
      ? <Loading className="h-screen" />
      : (
          fs ? <MainShell fs={fs} /> : <PickDirectory />
        )
  )
}
