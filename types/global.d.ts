import type { ReactNode } from 'react'

declare global {
  interface IComponent {
    children?: ReactNode
    className?: string
  }
}
