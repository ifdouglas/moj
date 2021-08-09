import styled from 'styled-components'

const Pad = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
`

const Content = styled.div`
  height: 230px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default {
  Pad,
  Content
}