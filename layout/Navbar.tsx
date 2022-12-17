import type { FC } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { Container, NavbarLink } from 'components'

const Navbar: FC<IComponent> = ({ className }) => {
  return (
    <nav className={twMerge(className, 'border-b-2 border-gray-100')}>
      <Container className="py-6 flex justify-between items-center">
        <Image src="/assets/logos/dark-logo.png" alt="logo" width={170} height={60} priority />
        <div className="flex gap-4 text-sm font-medium">
          <NavbarLink href="/how-it-works">How it Works</NavbarLink>
          <NavbarLink href="/members">Members</NavbarLink>
          <NavbarLink href="https://office.onlinecowork">Join Discord Community</NavbarLink>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
