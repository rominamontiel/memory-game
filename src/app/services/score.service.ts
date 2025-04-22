import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScoreModelPostBE } from '../models/score.model';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  private apiUrl = 'https://memory-game-service.onrender.com/scores';

  constructor(private http: HttpClient) {}

  postScore(data: ScoreModelPostBE): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getScores(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
