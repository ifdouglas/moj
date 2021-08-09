import { css, FlattenInterpolation, ThemeProps } from 'styled-components'
import { ButtonAppearance } from './interface'

export const getButtonAppearance = (appearance: ButtonAppearance = 'primary')
  : FlattenInterpolation<ThemeProps<any>> => {
  const tokens = {
    primary: css`
      background: #2CB119;
      color: #ffffff;
      border: 1px solid #1C7210;
      box-shadow: 0 0.2em 0 0.05em #238E14;
      border-bottom-color: #2CB119;
    `,
    secondary: css`
      background: #ffffff;
      color: #111111;
      border: 1px solid #999999;
      box-shadow: 0 0.2em 0 0.05em #cccccc;
      border-bottom-color: #ffffff;
    `,
    danger: css`
      background: #D83736;
      color: #ffffff;
      border: 1px solid #581616;
      box-shadow: 0 0.2em 0 0.05em #ad2c2b;
      border-bottom-color: #D83736;
    `,
  } as Record<ButtonAppearance, FlattenInterpolation<ThemeProps<any>>>

  return tokens[appearance]
}

export const getButtonActiveAppearance = (appearance: ButtonAppearance = 'primary')
  : FlattenInterpolation<ThemeProps<any>> => {
  const tokens = {
    primary: css`
      background: #2a2a2a;
      color: #1C7210;
      box-shadow: 0 0 0 0.05em #2CB119;
    `,
    secondary: css`
      background: #2a2a2a;
      color: #999999;
      box-shadow: 0 0 0 0.05em #ffffff;
    `,
    danger: css`
      background: #2a2a2a;
      color: #8a2322;
      box-shadow: 0 0 0 0.05em #D83736;
    `,
  } as Record<ButtonAppearance, FlattenInterpolation<ThemeProps<any>>>

  return tokens[appearance]
}