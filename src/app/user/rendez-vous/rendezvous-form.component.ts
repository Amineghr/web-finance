// rendezvous-form.component.ts
import { Component } from '@angular/core';


import { Rendezvous } from 'src/app/rendezvous';
import { RendezvousService } from 'src/app/rendezvous.service';

@Component({
  selector: 'app-rendezvous-form',
  templateUrl: './rendezvous-form.component.html',
  styleUrls: ['./rendezvous-form.component.css']
})
export class RendezvousFormComponent {
  rendezvous: Rendezvous = { name: '', date: '', time: '' };

  constructor(private rendezvousService: RendezvousService) {}

  submitRendezvous() {
    this.rendezvousService.addRendezvous(this.rendezvous);
    this.resetForm();
  }

  resetForm() {
    this.rendezvous = { name: '', date: '', time: '' };
  }
}
