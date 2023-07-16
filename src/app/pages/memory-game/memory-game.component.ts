import { Component, OnInit } from '@angular/core';

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
  matching: string[] = []

  constructor() {}

  ngOnInit(): void {}

  clickSquare(n: string) {
    if (this.pares.length == 2) {
      this.pares = [n];
    } else {
      this.pares.push(n);
    }
    console.log(this.pares);
    if(this.pares.length == 2 && this.pares[0][0] == this.pares[1][0]){
      this.matching.push(n[0])
    }
  }
}
