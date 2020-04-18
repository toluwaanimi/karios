import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCommitmentComponent } from './no-commitment.component';

describe('NoCommitmentComponent', () => {
  let component: NoCommitmentComponent;
  let fixture: ComponentFixture<NoCommitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoCommitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
