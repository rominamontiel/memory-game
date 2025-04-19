import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveScoreModalComponent } from './save-score-modal.component';

describe('SaveScoreModalComponent', () => {
  let component: SaveScoreModalComponent;
  let fixture: ComponentFixture<SaveScoreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveScoreModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveScoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
