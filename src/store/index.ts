import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { FsaNodeFs } from 'memfs/lib/fsa-to-node'
import type { IFileSystemDirectoryHandle } from 'memfs/lib/fsa/types'
import { STORAGE_KEYS } from '@/config'

export const sidebarCollapsedAtom = atomWithStorage(STORAGE_KEYS.SIDEBAR_COLLAPSED, false)

export const isGlobalLoadingAtom = atom(true)
export const fsDirHandleAtom = atom<FileSystemDirectoryHandle | null>(null)
export const fsAtom = atom<FsaNodeFs | null>((get) => {
  const dirHandle = get(fsDirHandleAtom)
  if (!dirHandle) {
    return null
  }
  return new FsaNodeFs(dirHandle as unknown as IFileSystemDirectoryHandle)
})

export const newPageDialogOpenAtom = atom(false)
