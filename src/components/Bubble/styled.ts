import styled from 'styled-components'

const Bubble = styled.div`
	position: absolute;
	background: #E4DDF1;
	border-radius: .4em;
  width: 200px;
  min-height: 100px;
  padding: 10px;
  left: 90px;
  top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px #B2B2B2;

  :after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 29px solid transparent;
    border-left-color: #E4DDF1;
    border-right: 0;
    border-bottom: 0;
    margin-top: -14.5px;
    margin-right: -29px;
  }
`

export default {
  Bubble
}