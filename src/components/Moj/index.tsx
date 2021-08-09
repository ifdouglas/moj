import { ReactElement } from 'react'
import { MojProps } from './interface'
import Styled from './styled'

const Moj = ({ feeling = 'normal' }: MojProps): ReactElement => (
  <Styled.Moj feeling={feeling}>
    <Styled.Eyes>
      <Styled.Eye />
      <Styled.Eye />
    </Styled.Eyes>
    <Styled.Mouth />
  </Styled.Moj>
)

export default Moj
