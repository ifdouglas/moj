import styled from 'styled-components'

const Answer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 200px;
  padding: 0 50px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-radius: 50px;
  background: #493d59;
  margin: 20px 0;
  box-shadow:  10px 10px 30px #3e344c, -10px -10px 30px #544666;

  > * {
    margin-right: 5px;
  }
`

export default {
  Answer
}