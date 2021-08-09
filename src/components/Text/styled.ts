import styled from 'styled-components'
import { fadeIn } from 'resources/styles/keyframes'
import { TextCoreProps } from './interfaces'

const Text = styled.div<Omit<TextCoreProps, 'children'>>`
  color: ${({ color }) => color};
  display: block;
  font-family: Teko, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight, size }) => lineHeight || size};
  text-align: ${({ align }) => align};
  margin: 0;
  animation: 0.5s ${fadeIn} linear;
`;

export default {
  Text,
}
