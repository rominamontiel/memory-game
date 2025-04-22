import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ScoreModelGetBE, ScoreModelPostBE } from 'src/app/models/score.model';
import { ScoreService } from 'src/app/services/score.service';
// declare var Audio: any;
@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss'],
})
export class MemoryGameComponent implements OnInit {
  squares = [
    '1a',
    '2a',
    '3a',
    '4a',
    '5a',
    '6a',
    '7a',
    '8a',
    '1b',
    '2b',
    '3b',
    '4b',
    '5b',
    '6b',
    '7b',
    '8b',
  ];
  pares: string[] = [];
  matching: string[] = [];
  points = 100;
  startGame = 0; //0 o 1

  clicky = new Audio();
  match = new Audio();

  readonly PIXEL_FRUIT = 'pixel_fruit';
  readonly REAL_FRUIT = 'real_fruit';
  readonly POKEMON = 'pokemon';
  styleCollection = this.POKEMON;

  minutes: number = 0;
  seconds: number = 0;
  finalTime = '';
  private timerSubscription!: Subscription;

  seeModalSaveName = false;
  today = new Date().toISOString().split('T')[0];
  scoreList: ScoreModelGetBE[] | undefined;
  seeModalScoreList = false;
  alreadySavedScore = false;
  isLoadingListScore = false;
  isLoadingSaveScore = false;
  msgIsLoading = '';
  isVisibleErrorSnackbar = false;

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.shuffleArray(this.squares);
    this.clicky.src = 'assets/sound/clicky.wav';
    this.clicky.load();
    this.match.src = 'assets/sound/match.wav';
    this.match.load();
  }

  shuffleArray(array: string[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  clickSquare(n: string) {
    if (this.matching.length < 8) {
      if (this.startGame == 0) this.startTimer();
      this.startGame += 1;

      if (!this.pares.includes(n)) {
        this.clicky.play();
        this.clicky.currentTime = 0;
        if (this.pares.length == 2) {
          this.pares = [n];
        } else {
          this.pares.push(n);
        }

        if (this.pares.length == 2 && this.pares[0][0] == this.pares[1][0]) {
          this.matching.push(n[0]);
          this.points += 100;
          this.match.play();
          this.match.currentTime = 0;
        } else {
          this.points -= 10;
        }

        if (this.matching.length == 8) {
          const min = this.minutes.toString();
          const sec = this.seconds < 10 ? '0' + this.seconds : this.seconds;
          this.finalTime = min + ':' + sec;
          this.stopTimer();
        }
      }
    }
  }

  reset() {
    this.clicky.play();
    this.shuffleArray(this.squares);
    this.matching = [];
    this.pares = [];
    this.points = 100;
    this.startGame = 0;
    this.stopTimer();
    this.alreadySavedScore = false;
  }

  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.seconds++;
      this.points -= 1;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }
    });
  }

  stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.seconds = 0;
      this.minutes = 0;
    }
  }

  //SERVICIO: GUARDAR PUNTAJE
  saveScore(name: string) {
    this.msgIsLoading = 'Guardando puntaje...';
    this.isLoadingSaveScore = true;
    this.seeModalSaveName = false;

    const BODY: ScoreModelPostBE = {
      date: this.today,
      name: name,
      score: this.points,
      time: this.finalTime ? this.finalTime : '0:00',
    };

    this.scoreService.postScore(BODY).subscribe({
      next: () => {
        this.alreadySavedScore = true;
        this.isLoadingSaveScore = false;
        this.msgIsLoading = '';
      },
      error: () => {
        this.isLoadingSaveScore = false;
        this.msgIsLoading = '';
        this.showSnackbarError();
      },
    });
  }

  //SERVICIO: VER MEJORES PUNTAJES
  seeListScore() {
    this.msgIsLoading = 'Obteniendo puntajes...';
    this.isLoadingListScore = true;

    this.scoreService.getScores().subscribe({
      next: (response) => {
        this.scoreList = response;
        this.isLoadingListScore = false;
        this.msgIsLoading = '';
        this.seeModalScoreList = true;
      },
      error: () => {
        this.isLoadingListScore = false;
        this.msgIsLoading = '';
        this.showSnackbarError();
      },
    });
  }

  showSnackbarError() {
    this.isVisibleErrorSnackbar = true;
    setTimeout(() => {
      this.isVisibleErrorSnackbar = false;
    }, 3000);
  }
}
