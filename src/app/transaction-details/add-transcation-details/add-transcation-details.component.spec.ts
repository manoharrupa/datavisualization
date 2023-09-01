import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTranscationDetailsComponent } from './add-transcation-details.component';

describe('AddTranscationDetailsComponent', () => {
  let component: AddTranscationDetailsComponent;
  let fixture: ComponentFixture<AddTranscationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTranscationDetailsComponent]
    });
    fixture = TestBed.createComponent(AddTranscationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
