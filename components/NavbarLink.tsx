import type { FC } from 'react'
import type { NavbarLinkProps } from 'types/components/navbar_link'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const NavbarLink: FC<NavbarLinkProps> = ({ children, className, href }) => {
  return (
    <Link href={href} className={twMerge('p-2 rounded-md hover:bg-indigo-50 focus:ring-2 focus:ring-offset-3 focus:ring-indigo-500', className)}>
      {children}
    </Link>
  )
}

export default NavbarLink
