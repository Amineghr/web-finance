import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerComponent } from './conseiller.component';

describe('ConseillerComponent', () => {
  let component: ConseillerComponent;
  let fixture: ComponentFixture<ConseillerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConseillerComponent]
    });
    fixture = TestBed.createComponent(ConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
