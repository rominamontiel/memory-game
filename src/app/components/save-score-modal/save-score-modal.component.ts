import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-save-score-modal',
  templateUrl: './save-score-modal.component.html',
  styleUrls: ['./save-score-modal.component.scss'],
})
export class SaveScoreModalComponent implements OnInit {
  @Output() onSaveName = new EventEmitter<string>();
  @Output() closeModal = new EventEmitter<any>();
  name: string = '';
  prohibitedWords: string[] = [
    'puto',
    'gordo',
    'puta',
    'negro',
    'mierda',
    'negra',
  ];

  constructor() {}

  ngOnInit(): void {}

  saveName() {
    this.onSaveName.emit(this.name);
  }

  disabledButton() {
    return (
      this.name == '' ||
      this.prohibitedWords.includes(this.name) ||
      this.name.length > 10
    );
  }

  onClickClose() {
    this.closeModal.emit();
  }
}
