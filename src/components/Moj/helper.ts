import { css, FlattenInterpolation, ThemeProps } from 'styled-components'
import { blink, moveAngryHead, moveEyesDown, moveMouthDown, speeching, wink } from 'resources/styles/keyframes'
import { Feeling } from './interface'

export const getEyesFeeling = (feeling: Feeling = 'normal')
  : FlattenInterpolation<ThemeProps<any>> => {
  const colors = {
    normal: css`margin-top: 30%;`,
    happy: css`
      animation: ${moveEyesDown} .8s;
      animation-delay: .3s;
    `,
    frustrated: css`
      animation: ${moveAngryHead} .6s;
      animation-delay: .3s;
    `,
  } as Record<Feeling, FlattenInterpolation<ThemeProps<any>>>

  return colors[feeling]
}

export const getEyeFeeling = (feeling: Feeling = 'normal')
  : FlattenInterpolation<ThemeProps<any>> => {
  const colors = {
    normal: css`
      height: 20px;
      margin-top: 0;
      animation: ${blink} .6s;
      animation-delay: .3s;
    `,
    happy: css`
      :nth-of-type(2) {
        height: 20px;
        margin-top: 0;
        animation: ${wink} .8s;
        animation-delay: .3s;
      }
    `,
  } as Record<Feeling, FlattenInterpolation<ThemeProps<any>>>

  return colors[feeling]
}

export const getMouthFeeling = (feeling: Feeling = 'normal')
  : FlattenInterpolation<ThemeProps<any>> => {
  const colors = {
    normal: css`
      display: none;
    `,
    happy: css`
      animation: ${moveMouthDown} .8s;
      animation-delay: .3s;
    `,
    frustrated: css`
      width: 50%;
      height: 20%;
      border-top-left-radius: 100%;
      border-top-right-radius: 100%;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      bottom: 18%;
      left: 50%;
      margin-left: -25%;
      border-bottom: 0;
      animation: ${moveAngryHead} .6s;
      animation-delay: .3s;
    `,
    talker: css`
      width: 40%;
      height: 20%;
      border-top-left-radius: 100%;
      border-top-right-radius: 100%;
      border-bottom-left-radius: 100%;
      border-bottom-right-radius: 100%;
      bottom: 18%;
      left: 50%;
      margin-left: -20%;
      border-bottom: 0;
      animation: ${speeching} 3s;
      animation-delay: .3s;
    `,
  } as Record<Feeling, FlattenInterpolation<ThemeProps<any>>>

  return colors[feeling]
}