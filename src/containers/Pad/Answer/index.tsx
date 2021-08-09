import { useRecoilState } from 'recoil'
import Keycap from 'components/Keycap'
import { atomAnswer, Letter } from 'stores/answer'
import Styled from './styled'

const Answer = () => {
  const [answer, setAnswer] = useRecoilState(atomAnswer);

  const removeFromAnswer = (value: Letter) => setAnswer(answer.filter(letter => letter !== value))

  const renderAnswer = () =>
    answer?.map((letter, index) =>
      <Keycap
        key={`answer-letter-${index}`}
        value={Object.values(letter)[0]}
        onClick={() => removeFromAnswer(letter)}
      />)

  return (
    <Styled.Answer>
      {renderAnswer()}
    </Styled.Answer>
  )
}

export default Answer
