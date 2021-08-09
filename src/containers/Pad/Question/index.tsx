import { memo } from 'react'
import { useRecoilState } from 'recoil'
import { atomAnswer } from 'stores/answer'
import some from 'lodash/some'
import Keycap from 'components/Keycap'
import Text from 'components/Text'
import Styled from './styled'

interface QuestionProps {
  letters: string[],
}

const Question = ({ letters }: QuestionProps) => {
  const [answer, setAnswer] = useRecoilState(atomAnswer)

  const addToAnswer = (index: number, value: string) => setAnswer([...answer, { [index]: value }])

  const renderLetters = () =>
    letters?.map((letter, index) =>
      <Keycap
        key={`question-letter-${index}`}
        value={letter}
        onClick={() => addToAnswer(index, letter)}
        disabled={some(answer, { [index]: letter })}
      />)

  return (
    <Styled.Question>
      <Text.H3 color="white">click to choose the order for your answer</Text.H3>
      <Styled.Keyboard>
        {renderLetters()}
      </Styled.Keyboard>
    </Styled.Question>
  )
}

export default memo(Question)
