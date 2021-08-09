import styled, { css } from 'styled-components'
import { scaleIn } from 'resources/styles/keyframes'
import { getButtonActiveAppearance, getButtonAppearance } from './helper'
import { ButtonProps } from './interface'

type ButtonStyledProps = Pick<ButtonProps, 'height' | 'appearance'>

const Button = styled.button<ButtonStyledProps>`
  border: none;
  padding: 0 25px;
  height: ${({ height }) => height};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ appearance }) => getButtonAppearance(appearance)}
  animation: 0.2s ${scaleIn} linear;

  ${({ onClick, appearance }) => onClick && css`
    :active {
      position: relative;
      top: 2px;
      ${getButtonActiveAppearance(appearance)}
    }
  `}

  ${({ disabled }) => disabled && css`
    opacity: 0.2;
    cursor: default;
  `}
`

export default {
  Button
}
