import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTextoComponent } from './inicio-texto.component';

describe('InicioTextoComponent', () => {
  let component: InicioTextoComponent;
  let fixture: ComponentFixture<InicioTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
