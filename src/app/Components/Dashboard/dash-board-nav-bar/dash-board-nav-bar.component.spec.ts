import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardNavBarComponent } from './dash-board-nav-bar.component';

describe('DashBoardNavBarComponent', () => {
  let component: DashBoardNavBarComponent;
  let fixture: ComponentFixture<DashBoardNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
