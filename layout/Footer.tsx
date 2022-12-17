import type { FC } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { Container } from 'components'

const Footer: FC<IComponent> = ({ className }) => {
  return (
    <footer className={twMerge(className)}>
      <Container>Footer</Container>
    </footer>
  )
}

export default Footer
