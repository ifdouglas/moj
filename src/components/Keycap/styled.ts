import styled, { css } from 'styled-components'

const Keycap = styled.button`
  border: none;
  background: #fff;
  color: #111;
  font-size: 30px;
  width: 50px;
  height: 50px;
  font-weight: 700;
  font-family: Teko;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: 1px solid #444;
  box-shadow: 0 0.2em 0 0.05em #222;
  border-bottom-color: #555;

  ${({ onClick }) => onClick && css`
    :active {
      background: #2a2a2a;
      color: #fff;
      position: relative;
      top: 2px;
      box-shadow: 0 0 0 0.05em black;
    }
  `}

  ${({ disabled }) => disabled && css`
    opacity: 0.2;
    cursor: default;
  `}
`

export default {
  Keycap
}