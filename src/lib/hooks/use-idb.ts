import { useEffect, useState } from 'react'
import { get } from 'idb-keyval'

type Result<T> = { isLoading: false, value: T } | { isLoading: true, value: null }

export const useIdbValue = <T>(key: string): Result<T> => {
  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState<T | null>(null)

  useEffect(() => {
    let canceled = false
    get(key).then((value) => {
      if (!canceled) {
        setValue(value)
        setIsLoading(false)
      }
    })
    return () => {
      canceled = true
    }
  }, [key])

  return { isLoading, value } as Result<T>
}
