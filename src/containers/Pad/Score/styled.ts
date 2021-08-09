import styled from 'styled-components'
import { scaleIn } from 'resources/styles/keyframes'

const Score = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 600px;
  position: absolute;
  top: 30px;
  right: -220px;

  > :first-child {
    margin-bottom: 20px;
  }
`

const Plate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 170px;
  color: #ffffff;
  border-radius: 30px;
  background: #493d59;
  box-shadow:  10px 10px 30px #3e344c, -10px -10px 30px #544666;
  animation: 0.2s ${scaleIn} linear;
`

export default {
  Score,
  Plate,
}
