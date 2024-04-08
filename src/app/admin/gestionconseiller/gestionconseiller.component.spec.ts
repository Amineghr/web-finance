import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionconseillerComponent } from './gestionconseiller.component';

describe('GestionconseillerComponent', () => {
  let component: GestionconseillerComponent;
  let fixture: ComponentFixture<GestionconseillerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionconseillerComponent]
    });
    fixture = TestBed.createComponent(GestionconseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
