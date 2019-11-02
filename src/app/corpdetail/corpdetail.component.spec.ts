import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpdetailComponent } from './corpdetail.component';

describe('CorpdetailComponent', () => {
  let component: CorpdetailComponent;
  let fixture: ComponentFixture<CorpdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
