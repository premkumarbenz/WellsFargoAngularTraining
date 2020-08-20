import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAwesomeLibComponent } from './the-awesome-lib.component';

describe('TheAwesomeLibComponent', () => {
  let component: TheAwesomeLibComponent;
  let fixture: ComponentFixture<TheAwesomeLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheAwesomeLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheAwesomeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
