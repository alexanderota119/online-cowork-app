import type { FC } from 'react'
import Link from 'next/link'

const NavbarLink: FC<IComponent> = ({ children }) => {
  return (
    <Link href="#" className="p-2 rounded-md hover:bg-indigo-50 focus:ring-2 focus:ring-offset-3 focus:ring-indigo-500">
      {children}
    </Link>
  )
}

export default NavbarLink
