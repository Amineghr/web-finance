// rendezvous.service.ts
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  constructor(private db: AngularFireDatabase) {}

  getRendezvous(): Observable<any[]> {
    return this.db.list('rendezvous').valueChanges();
  }

  addRendezvous(rendezvous: any): void {
    this.db.list('rendezvous').push(rendezvous);
  }
}
