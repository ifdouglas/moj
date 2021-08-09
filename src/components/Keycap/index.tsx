import Styled from './styled'

interface Props {
  value: string;
  disabled?: boolean;
  onClick?: (value: string) => void;
}

const Keycap = ({ value, disabled = false, onClick }: Props) => {
  const handleOnClick = () => (!disabled && onClick) && onClick(value)

  return (
    <Styled.Keycap
      disabled={disabled}
      value={value}
      onClick={handleOnClick}
    >
      {value}
    </Styled.Keycap>
  )
}

export default Keycap
