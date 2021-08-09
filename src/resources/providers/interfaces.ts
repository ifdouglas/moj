export interface Spelling {
  id: number
  'audio-url': string
  'letter-pool': string[]
}

export interface SpellingAnswer {
  id: number
  answer: string
}

export interface SpellingCorrection {
  correct: boolean
  'correct-answer': string
}
