import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScoreModelPostBE } from '../models/score.model';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  private apiUrl =
    'https://680303dd0a99cb7408eae952.mockapi.io/memory-game/scores';

  constructor(private http: HttpClient) {}

  postScore(data: ScoreModelPostBE): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getScores(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
