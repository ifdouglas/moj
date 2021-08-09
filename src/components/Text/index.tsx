import FONT_SIZE from './constants'
import { TextCoreProps, TextProps } from './interfaces'
import Styled from './styled'

const Component = ({
  align = "left",
  children,
  className,
  color = "light",
  lineHeight = "normal",
  weight = "normal",
  size,
  as,
}: TextCoreProps) => {
  return (
    <Styled.Text
      as={as}
      align={align}
      className={className}
      color={color}
      lineHeight={lineHeight}
      size={size}
      weight={weight}
    >
      {children}
    </Styled.Text>
  )
}

const Text = {
  H1: (props: TextProps) => <Component as="h1" size={FONT_SIZE.h1} {...props} />,
  H2: (props: TextProps) => <Component as="h2" size={FONT_SIZE.h2} {...props} />,
  H3: (props: TextProps) => <Component as="h3" size={FONT_SIZE.h3} {...props} />,
  H4: (props: TextProps) => <Component as="h4" size={FONT_SIZE.h4} {...props} />,
  H5: (props: TextProps) => <Component as="h5" size={FONT_SIZE.h5} {...props} />,
  H6: (props: TextProps) => <Component as="h6" size={FONT_SIZE.h6} {...props} />,
}

export default Text
