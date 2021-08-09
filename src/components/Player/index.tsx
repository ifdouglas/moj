import { memo } from 'react'
import { ReactSVG } from 'react-svg'
import ListenSVG from 'resources/svgs/listen.svg'
import Button from 'components/Button'
import Styled from './styled'

interface AudioProps {
  source: string | undefined
  disabled?: boolean
}

const Player = ({ source, disabled }: AudioProps) => {
  const audio = new Audio(source)

  return (
    <Styled.Audio>
      <Button disabled={disabled} onClick={() => audio.play()}>
        <ReactSVG
          src={ListenSVG}
          color="white"
        />
      </Button>
    </Styled.Audio>
  )
}

export default memo(Player)
