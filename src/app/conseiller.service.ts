import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Conseiler } from './conseiler';

@Injectable({
  providedIn: 'root'
})
export class ConseillerService {
  private conseillersCollection: AngularFirestoreCollection<Conseiler>;
  getConseillerById: any;

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.conseillersCollection = this.firestore.collection<Conseiler>('conseillers');
  }

  // Récupérer tous les conseillers
  getConseillers(): Observable<Conseiler[]> {
    return this.conseillersCollection.valueChanges({ idField: 'id' });
  }

  // Ajouter un conseiller
  addConseiller(conseiller: Conseiler): Promise<void> {
    return this.conseillersCollection.add(conseiller).then(() => {
      console.log('Conseiller added successfully!');
    }).catch(error => {
      console.error('Error adding conseiller: ', error);
    });
  }

  // Mettre à jour un conseiller
  updateConseiller(conseillerId: string, updatedConseiller: Conseiler): Promise<void> {
    return this.conseillersCollection.doc(conseillerId).update(updatedConseiller).then(() => {
      console.log('Conseiller updated successfully!');
    }).catch(error => {
      console.error('Error updating conseiller: ', error);
    });
  }

  // Supprimer un conseiller
  deleteConseiller(conseillerId: string): Promise<void> {
    return this.conseillersCollection.doc(conseillerId).delete().then(() => {
      console.log('Conseiller deleted successfully!');
    }).catch(error => {
      console.error('Error deleting conseiller: ', error);
    });
  }
}
