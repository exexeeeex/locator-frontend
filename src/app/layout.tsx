import { Outlet } from 'react-router-dom'
import { Navigation } from "@/features/navigation";

export const Layout = () => {
  return (
    <section className="w-full h-full">
      <Outlet />
      <Navigation /> 
    </section>
  )
}
