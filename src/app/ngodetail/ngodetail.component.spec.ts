import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgodetailComponent } from './ngodetail.component';

describe('NgodetailComponent', () => {
  let component: NgodetailComponent;
  let fixture: ComponentFixture<NgodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
