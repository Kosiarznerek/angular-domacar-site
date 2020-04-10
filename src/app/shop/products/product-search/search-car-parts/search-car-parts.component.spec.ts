import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchCarPartsComponent} from './search-car-parts.component';

describe('SearchCarPartsComponent', () => {
  let component: SearchCarPartsComponent;
  let fixture: ComponentFixture<SearchCarPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCarPartsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCarPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
