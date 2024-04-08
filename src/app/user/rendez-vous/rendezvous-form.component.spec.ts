import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvousFormComponent } from './rendezvous-form.component';

describe('RendezvousFormComponent', () => {
  let component: RendezvousFormComponent;
  let fixture: ComponentFixture<RendezvousFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RendezvousFormComponent]
    });
    fixture = TestBed.createComponent(RendezvousFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
