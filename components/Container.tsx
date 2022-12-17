import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'

const Container: FC<IComponent> = ({ children, className }) => {
  return <div className={twMerge('max-w-screen-xl mx-auto px-8 border border-solid border-red-500', className)}>{children}</div>
}

export default Container
