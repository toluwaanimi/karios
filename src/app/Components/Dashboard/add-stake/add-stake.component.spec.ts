import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStakeComponent } from './add-stake.component';

describe('AddStakeComponent', () => {
  let component: AddStakeComponent;
  let fixture: ComponentFixture<AddStakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
