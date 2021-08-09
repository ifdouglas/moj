import { atom, selector } from 'recoil'

export interface Letter {
  [key: number]: string;
}

export const atomAnswer = atom<Letter[]>({
  key: 'atomAnswer',
  default: [],
})

export const selectorAnswer = selector({
  key: 'selectorAnswer',
  get: ({ get }) => {
    const letters = get(atomAnswer);
    const mappedValues = letters.map(a => Object.values(a)[0])

    return {
      letters: letters,
      answer: mappedValues.join('')
    }
  },
});
