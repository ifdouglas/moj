import { Feeling } from 'components/Moj/interface'
import { atom, selector } from 'recoil'

export const atomFeeling = atom<Feeling>({
  key: 'atomFeeling',
  default: 'normal',
})

export const selectorFeeling = selector({
  key: 'selectorFeeling',
  get: ({ get }) => {
    const feeling = get(atomFeeling)

    return feeling
  },
})
