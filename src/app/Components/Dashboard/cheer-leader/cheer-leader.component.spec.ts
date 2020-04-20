import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheerLeaderComponent } from './cheer-leader.component';

describe('CheerLeaderComponent', () => {
  let component: CheerLeaderComponent;
  let fixture: ComponentFixture<CheerLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheerLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheerLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
