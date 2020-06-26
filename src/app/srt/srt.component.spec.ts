import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SRTComponent } from './srt.component';

describe('SRTComponent', () => {
  let component: SRTComponent;
  let fixture: ComponentFixture<SRTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SRTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SRTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
