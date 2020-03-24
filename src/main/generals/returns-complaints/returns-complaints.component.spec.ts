import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReturnsComplaintsComponent} from './returns-complaints.component';

describe('ReturnsComplaintsComponent', () => {
  let component: ReturnsComplaintsComponent;
  let fixture: ComponentFixture<ReturnsComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnsComplaintsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
