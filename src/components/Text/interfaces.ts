import { ReactElement } from 'react'

export interface TextProps {
  align?: string
  children: string | number | ReactElement
  className?: string
  color?: string
  lineHeight?: string
  weight?: string
}

export interface TextCoreProps extends TextProps {
  size: string
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
