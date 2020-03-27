import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTecnicasComponent } from './lista-tecnicas.component';

describe('ListaTecnicasComponent', () => {
  let component: ListaTecnicasComponent;
  let fixture: ComponentFixture<ListaTecnicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTecnicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTecnicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
