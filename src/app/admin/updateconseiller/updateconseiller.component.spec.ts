import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateconseillerComponent } from './updateconseiller.component';

describe('UpdateconseillerComponent', () => {
  let component: UpdateconseillerComponent;
  let fixture: ComponentFixture<UpdateconseillerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateconseillerComponent]
    });
    fixture = TestBed.createComponent(UpdateconseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
