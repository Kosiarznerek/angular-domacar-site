import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchTiresComponent} from './search-tires.component';

describe('SearchTiresComponent', () => {
  let component: SearchTiresComponent;
  let fixture: ComponentFixture<SearchTiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTiresComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
