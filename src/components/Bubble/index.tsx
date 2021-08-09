import Text from 'components/Text'
import Styled from './styled'

interface BubbleProps {
  letter?: string
}

const Bubble = ({ letter = '' }: BubbleProps) => (
  <Styled.Bubble>
    <Text.H2>{letter}</Text.H2>
  </Styled.Bubble>
)

export default Bubble