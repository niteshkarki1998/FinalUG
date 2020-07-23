import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontentComponent } from './viewcontent.component';

describe('ViewcontentComponent', () => {
  let component: ViewcontentComponent;
  let fixture: ComponentFixture<ViewcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
