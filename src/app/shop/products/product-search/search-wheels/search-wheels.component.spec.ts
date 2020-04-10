import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchWheelsComponent} from './search-wheels.component';

describe('SearchWheelsComponent', () => {
  let component: SearchWheelsComponent;
  let fixture: ComponentFixture<SearchWheelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchWheelsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
