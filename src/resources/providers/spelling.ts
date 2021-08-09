import { baseRequest } from './base'
import { Spelling, SpellingAnswer, SpellingCorrection } from './interfaces'

const SpellingApi = 'recruitment/spelling'

export const getSpelling = (): Promise<Spelling> => {
  return baseRequest(SpellingApi);
};

export const postSpelling = ({ id, answer }: SpellingAnswer): Promise<SpellingCorrection> => {
  return baseRequest(SpellingApi, null, { id, answer }, {
    method: 'POST',
  });
};
