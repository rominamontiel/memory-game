import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderFullScreenComponent } from './loader-full-screen.component';

describe('LoaderFullScreenComponent', () => {
  let component: LoaderFullScreenComponent;
  let fixture: ComponentFixture<LoaderFullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderFullScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
