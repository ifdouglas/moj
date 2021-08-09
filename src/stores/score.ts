import { atom, selector } from 'recoil'

interface Score {
  correct: number
  incorrect: number
}

export const atomScore = atom<Score>({
  key: 'atomScore',
  default: {
    correct: 0,
    incorrect: 0
  },
})

export const selectorScore = selector({
  key: 'selectorSCore',
  get: ({ get }) => {
    const score = get(atomScore);

    return score
  },
})
