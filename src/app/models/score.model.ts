export interface ScoreModelPostBE {
  date: string;
  name: string;
  score: number;
  time: string;
}

export interface ScoreModelGetBE extends ScoreModelPostBE {
  id: number;
}
