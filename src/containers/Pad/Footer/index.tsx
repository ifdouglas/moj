import { useMutation } from 'react-query'
import { ReactSVG } from 'react-svg'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { atomAnswer, selectorAnswer } from 'stores/answer'
import { postSpelling } from 'resources/providers/spelling'
import { Spelling } from 'resources/providers/interfaces'
import NextSVG from 'resources/svgs/next.svg'
import FailMP3 from 'resources/audios/fail.mp3'
import SuccessMP3 from 'resources/audios/success.mp3'
import { queryClient } from 'containers/App'
import Button from 'components/Button'
import Text from 'components/Text'
import { atomFeeling } from 'stores/moj'
import Styled from './styled'
import { atomScore } from 'stores/score'
import Player from 'components/Player'
import Bubble from 'components/Bubble'

interface Props {
  data: Spelling | undefined
}

const Footer = ({ data }: Props) => {
  const { letters, answer } = useRecoilValue(selectorAnswer)
  const [feeling, setFeeling] = useRecoilState(atomFeeling)
  const [score, setScore] = useRecoilState(atomScore)
  const resetAnswer = useResetRecoilState(atomAnswer);
  const isTryDisabled = letters.length !== data?.['letter-pool'].length
  const isBubbleEnabled = feeling === 'talker'
  const audioFail = new Audio(FailMP3)
  const audioSuccess = new Audio(SuccessMP3)

  const mutation = useMutation(postSpelling, {
    onSuccess: data => {
      queryClient.setQueryData(['spellingAnswer'], data)
      data?.correct ? onSuccess() : onFail()
    }
  })

  const onSubmit = () => {
    data?.id && mutation.mutate({ id: data?.id, answer })
    setFeeling('normal')
  }

  const onSuccess = () => {
    audioSuccess.play()
    setFeeling('happy')
    setScore({ ...score, correct: score.correct + 1 })
  }

  const onFail = () => {
    audioFail.play()
    setFeeling('talker')
    setScore({ ...score, incorrect: score.incorrect + 1 })
  }

  const onNext = () => {
    setFeeling('normal')
    resetAnswer()
    mutation.reset()
    queryClient.refetchQueries('spelling')
  }

  return (
    <Styled.Footer>
      {isBubbleEnabled && <Bubble letter={mutation.data?.['correct-answer']} />}
      <Player source={data?.['audio-url']} disabled={mutation.isLoading} />
      <Button
        disabled={isTryDisabled || mutation.isLoading || mutation.isSuccess}
        onClick={onSubmit}
      >
        <Text.H2>Try</Text.H2>
      </Button>
      <Button appearance="secondary" onClick={onNext}>
        <ReactSVG src={NextSVG} color="white" />
      </Button>
    </Styled.Footer>
  )
}

export default Footer
