import styled from 'styled-components'
import { getEyeFeeling, getEyesFeeling, getMouthFeeling } from './helper'
import { MojProps } from './interface'

const Mouth = styled.div`
  width: 60%;
  height: 30%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  box-sizing: border-box;
  position: absolute;
  bottom: 18%;
  left: 50%;
  margin-left: -30%;
  background: #B57700;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`

const Eyes = styled.div`
  width: 100%;
  margin-top: 15%;
  box-sizing: border-box;
  padding: 0 5px;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`

const Eye = styled.div`
  width: 20px;
  height: 20px;
  background: #B57700;
  float: left;
  border-radius: 100%;
  position: relative;

  :nth-of-type(2) {
    float: right;
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 0%;
    height: 0%;
    background: #fed800;
    transform: rotate(0deg);
    top: -15px;
    left: 5px;
    transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :first-of-type::after {
    transform: rotate(0deg);
    left: auto;
    right: 5px;
  }
`

const Moj = styled.div<MojProps>`
  background: linear-gradient(135deg, rgb(255, 233, 25) 0%, rgb(251, 192, 0) 100%);
  border-radius: 100%;
  padding: 25px;
  margin-top: 20px;
  position: relative;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  box-shadow: rgba(211, 165, 110, 0.498039) 0px 10px 10px 1px, #5d4e72 0px 10px 5px 1px;

  ${Mouth} {
    ${({ feeling }) => getMouthFeeling(feeling)};
  }

  ${Eyes} {
    ${({ feeling }) => getEyesFeeling(feeling)};
  }

  ${Eye} {
    ${({ feeling }) => getEyeFeeling(feeling)};
  }
`

export default {
  Moj,
  Eyes,
  Eye,
  Mouth
}
