import type { FC } from 'react'
import { Navbar, Footer } from 'layout'

const Layout: FC<IComponent> = ({ children }) => {
  return (
    <div className="font-serif flex flex-col min-h-screen">
      <Navbar className="flex-none" />
      <main className="grow">{children}</main>
      <Footer className="flex-none" />
    </div>
  )
}

export default Layout
