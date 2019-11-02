import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorplistComponent } from './corplist.component';

describe('CorplistComponent', () => {
  let component: CorplistComponent;
  let fixture: ComponentFixture<CorplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
