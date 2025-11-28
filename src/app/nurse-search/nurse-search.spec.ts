import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseSearch } from './nurse-search';

describe('NurseSearch', () => {
  let component: NurseSearch;
  let fixture: ComponentFixture<NurseSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
