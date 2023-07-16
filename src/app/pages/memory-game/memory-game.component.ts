import { Component, OnInit } from '@angular/core';
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

  clicky = new Audio();
  match = new Audio();

  constructor() {}

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
          console.log('PUNTAJE FINAL: ' + this.points);
        }
      }
    }
  }

  reset() {
    this.clicky.play();
    this.matching = [];
    this.pares = [];
    this.points = 100;
  }
}
