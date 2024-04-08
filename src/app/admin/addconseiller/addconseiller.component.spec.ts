import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconseillerComponent } from './addconseiller.component';

describe('AddconseillerComponent', () => {
  let component: AddconseillerComponent;
  let fixture: ComponentFixture<AddconseillerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddconseillerComponent]
    });
    fixture = TestBed.createComponent(AddconseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
