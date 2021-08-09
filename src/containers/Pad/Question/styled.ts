import styled from 'styled-components'
import { fadeIn } from 'resources/styles/keyframes'

const Question = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100px;
  justify-content: center;
  align-items: center;
`

const Keyboard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 900px;
  height: 80px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  animation: 0.5s ${fadeIn} linear;

  > * {
    margin-right: 5px;
  }
`

export default {
  Question,
  Keyboard
}
