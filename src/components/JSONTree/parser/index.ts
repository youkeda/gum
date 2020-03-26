import Match from '../model/match';

export interface ParserFunc {
  (key: string): Match;
}
