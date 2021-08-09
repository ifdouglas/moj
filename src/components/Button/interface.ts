import { ReactElement } from 'react'

export type ButtonAppearance = 'primary' | 'secondary' | 'danger'

export interface ButtonProps {
  children: ReactElement | string
  height?: string
  disabled?: boolean
  onClick?: VoidFunction
  appearance?: ButtonAppearance
}