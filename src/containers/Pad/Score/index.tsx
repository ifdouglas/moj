import { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { selectorScore } from 'stores/score'
import Text from 'components/Text'
import Styled from './styled'

const Score = () => {
  const score = useRecoilValue(selectorScore)

  return (
    <Styled.Score>
      <Styled.Plate>
        <Text.H3>hits</Text.H3>
        <Text.H1 color="#2CB119">{score.correct}</Text.H1>
      </Styled.Plate>
      <Styled.Plate>
        <Text.H3>mistakes</Text.H3>
        <Text.H1 color="#D83736">{score.incorrect}</Text.H1>
      </Styled.Plate>
    </Styled.Score>
  )
}

export default memo(Score)
