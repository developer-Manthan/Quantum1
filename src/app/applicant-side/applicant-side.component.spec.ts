import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantSideComponent } from './applicant-side.component';

describe('ApplicantSideComponent', () => {
  let component: ApplicantSideComponent;
  let fixture: ComponentFixture<ApplicantSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
