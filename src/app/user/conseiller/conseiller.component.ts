import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Conseiller {
  nom: string;
  titre: string;
  experience: number;
  specialites: string[];
  localisation: string;
  photo: string; // Ajout d'une propriété pour l'image
}

@Component({
  selector: 'app-conseiller',
  templateUrl: './conseiller.component.html',
  styleUrls: ['./conseiller.component.css']
})
  export class ConseillerComponent implements OnInit {
    conseillers: Conseiller[] = [
      {
      nom: 'Bazelais Jessy',
      titre: 'Conseiller Financier',
      experience: 10,
      specialites: ['Investissement', 'Planification de la retraite'],
      localisation: 'New York, USA',
      photo: 'https://media.licdn.com/dms/image/D4E03AQGDOtAPw5SKJA/profile-displayphoto-shrink_800_800/0/1681929394382?e=1717632000&v=beta&t=gEOOKIpgKqRvn8RZcD7WXghjgMKMtU9h82PgO_3YmGI' // Lien vers l'image de John Doe
    },
    {
      nom: 'Jane Smith',
      titre: 'Conseillère Financière',
      experience: 8,
      specialites: ['Épargne', 'Assurance vie'],
      localisation: 'Londres, Royaume-Uni',
      photo: 'jane-smith.jpg' // Lien vers l'image de Jane Smith
    },
    {
      nom: 'Alice Johnson',
      titre: 'Conseillère en Placements',
      experience: 12,
      specialites: ['Gestion de patrimoine', 'Investissements durables'],
      localisation: 'Paris, France',
      photo: 'alice-johnson.jpg' // Lien vers l'image d'Alice Johnson
    },
    {
      nom: 'Mark Davis',
      titre: 'Conseiller Financier Senior',
      experience: 15,
      specialites: ['Planification financière', 'Gestion de risques'],
      localisation: 'Toronto, Canada',
      photo: 'mark-davis.jpg' // Lien vers l'image de Mark Davis
    }
    
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  prendreRendezVous() {
    this.router.navigateByUrl('/user/formrendez');
  }
  
}
