import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtutorComponent } from './addtutor.component';

describe('AddtutorComponent', () => {
  let component: AddtutorComponent;
  let fixture: ComponentFixture<AddtutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
