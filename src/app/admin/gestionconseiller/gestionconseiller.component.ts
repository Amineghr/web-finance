import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Conseiler } from 'src/app/conseiler';
import { ConseillerService } from 'src/app/conseiller.service';

@Component({
  selector: 'app-gestionconseiller',
  templateUrl: './gestionconseiller.component.html',
  styleUrls: ['./gestionconseiller.component.css']
})
export class GestionconseillerComponent implements OnInit {
  searchTerm: string = ''; // Déclaration de la variable searchTerm
  conseillers$: Observable<Conseiler[]> | undefined; // Utilisation d'un Observable pour récupérer les conseillers

  constructor(private conseillerService: ConseillerService) { }

  ngOnInit(): void {
    // Chargement initial des conseillers
    this.loadConseillers();
  }

  loadConseillers(): void {
    // Récupération des conseillers depuis le service
    this.conseillers$ = this.conseillerService.getConseillers();
  }

  searchConseiller(): void {
    // Implémentez la logique pour rechercher des conseillers en fonction de searchTerm
    // Vous pouvez utiliser la valeur de searchTerm pour filtrer les résultats de this.conseillers$
  }

  editConseiller(conseillerId: string): void {
    // Implémentez la logique pour éditer un conseiller en fonction de son ID
    // Vous pouvez utiliser l'ID pour récupérer le conseiller à éditer
  }

  deleteConseiller(conseillerId: string): void {
    // Suppression d'un conseiller en appelant la méthode du service
    this.conseillerService.deleteConseiller(conseillerId)
      .then(() => {
        console.log('Conseiller deleted successfully!');
        // Rechargement de la liste des conseillers après suppression
        this.loadConseillers();
      })
      .catch((error: any) => {
        console.error('Error deleting conseiller: ', error);
      });
  }
}
