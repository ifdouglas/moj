import { Fragment, memo, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'
import { getSpelling } from 'resources/providers/spelling'
import { selectorFeeling } from 'stores/moj'
import Moj from 'components/Moj'
import Text from 'components/Text'
import Answer from './Answer'
import Question from './Question'
import Loader from './Loader'
import Footer from './Footer'
import Styled from './styled'
import Score from './Score'

const Pad = () => {
  const { isFetching, data, isSuccess } = useQuery('spelling', getSpelling);
  const [letters, setLetters] = useState<string[]>([''])
  const feeling = useRecoilValue(selectorFeeling);

  useEffect(() => {
    if (data) setLetters(data?.['letter-pool'])
  }, [data])

  const render = () => (
    <Fragment>
      <Answer />
      <Question letters={letters} />
    </Fragment>
  )

  const Content = () =>
    <Styled.Content>
      {isFetching ? <Loader /> : render()}
    </Styled.Content>

  return (
    <Styled.Pad>
      <Score />
      <Text.H2 color="white">moj</Text.H2>
      <Moj feeling={feeling} />
      <Content />
      {isSuccess && <Footer data={data} />}
    </Styled.Pad>
  )
}

export default memo(Pad)
