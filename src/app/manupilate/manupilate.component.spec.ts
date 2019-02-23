import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManupilateComponent } from './manupilate.component';

describe('ManupilateComponent', () => {
  let component: ManupilateComponent;
  let fixture: ComponentFixture<ManupilateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManupilateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManupilateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
