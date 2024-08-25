import { useCallback, useState } from 'react'

type Mutate<T> = T extends (...args: any[]) => any ? (...args: Parameters<T>) => ReturnType<T> | null : never

export const useMutate = <T extends Record<string, any>, K extends keyof T>(
  service: T,
  method: K,
  message?: string,
): { isLoading: boolean, error: string, mutate: Mutate<T[K]> } => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const mutate = useCallback(async (...args: Parameters<T[K]>) => {
    setIsLoading(true)
    try {
      if (typeof service[method] !== 'function') {
        return null
      }
      return await (service[method])(...args)
    } catch (error: any) {
      setError(message || ('message' in error ? error.message : 'Request failed') as string)
      return null
    } finally {
      setIsLoading(false)
    }
  }, [service, method, message])

  return { isLoading, error, mutate: mutate as Mutate<T[K]> }
}
