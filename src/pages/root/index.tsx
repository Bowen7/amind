import { Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <div>
      Root
      <Outlet />
    </div>
  )
}
