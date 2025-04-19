import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ScoreModelGetBE } from 'src/app/models/score.model';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.scss'],
})
export class ScoreListComponent implements OnInit {
  @Output() closeModal = new EventEmitter<any>();
  @Input() scoreList: ScoreModelGetBE[] | undefined;
  @Input() isLoading: boolean = false;
  finalList: ScoreModelGetBE[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['scoreList'] &&
      changes['scoreList'].currentValue &&
      this.scoreList
    ) {
      this.finalList = this.scoreList
        .sort((a, b) => {
          if (b.score !== a.score) {
            return b.score - a.score; // Primero ordena por puntaje
          }
          // Si tienen el mismo puntaje, ordena por menor tiempo
          return (
            this.parseTimeToSeconds(a.time) - this.parseTimeToSeconds(b.time)
          );
        })
        .slice(0, 10);

      if (this.finalList[0])
        this.finalList[0].name = '🥇 ' + this.finalList[0].name;
      if (this.finalList[1])
        this.finalList[1].name = '🥈 ' + this.finalList[1].name;
      if (this.finalList[2])
        this.finalList[2].name = '🥉 ' + this.finalList[2].name;
    }
  }

  onClickClose() {
    this.closeModal.emit();
  }

  parseTimeToSeconds(time: string): number {
    const [min, sec] = time.split(':').map(Number);
    return (min || 0) * 60 + (sec || 0);
  }

  formatDate(date: string) {
    return date.split('-').reverse().join('-');
  }
}
