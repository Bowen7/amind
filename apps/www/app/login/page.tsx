'use client'
import { useRouter } from 'next/navigation'
import { Login } from '@amind/components/login'

export default function LoginPage() {
  const router = useRouter()

  const onLoginSuccess = () => {
    router.push('/mind')
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <Login onSuccess={onLoginSuccess} />
    </div>
  )
}
