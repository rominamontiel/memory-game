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
    'puta',
    'putx',
    'put0',
    'pajero',
    'pajera',
    'gordo',
    'gorda',
    'garch',
    'forro',
    'forra',
    'mierda',
    'pelotudo',
    'pelotuda',
    'boludo',
    'boluda',
    'chupala',
    'chupame',
    'culo',
    'ortiva',
    'concha',
    'pete',
    'sorete',
    'mogolico',
    'mogolica',
    'reputo',
    'reputa',
    'trolo',
    'trola',
    'maricon',
    'cagon',
    'cagona',
    'garca',
    'negro',
    'negra',
  ];

  constructor() {}

  ngOnInit(): void {}

  saveName() {
    this.onSaveName.emit(this.name);
  }

  disabledButton() {
    const NORMALIZED_NAME = this.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    return (
      NORMALIZED_NAME == '' ||
      this.prohibitedWords.some((word) => NORMALIZED_NAME.includes(word)) ||
      NORMALIZED_NAME.length > 10
    );
  }

  onClickClose() {
    this.closeModal.emit();
  }
}
