import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommitmentComponent } from './add-commitment.component';

describe('AddCommitmentComponent', () => {
  let component: AddCommitmentComponent;
  let fixture: ComponentFixture<AddCommitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
