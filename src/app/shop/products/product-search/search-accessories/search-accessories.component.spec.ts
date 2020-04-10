import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchAccessoriesComponent} from './search-accessories.component';

describe('SearchAccessoriesComponent', () => {
  let component: SearchAccessoriesComponent;
  let fixture: ComponentFixture<SearchAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAccessoriesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
