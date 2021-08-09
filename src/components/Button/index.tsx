import { ButtonProps } from './interface'
import Styled from './styled'

const Button = ({
  children,
  height = '70px',
  disabled,
  onClick,
  appearance
}: ButtonProps) => {

  const handleOnClick = () => (!disabled && onClick) && onClick()

  return (
    <Styled.Button
      appearance={appearance}
      height={height}
      disabled={disabled}
      onClick={handleOnClick}
    >
      {children}
    </Styled.Button>
  )
}

export default Button
