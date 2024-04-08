import { Component, OnInit } from '@angular/core';
import { Conseiler } from 'src/app/conseiler';
import { ConseillerService } from 'src/app/conseiller.service';

@Component({
  selector: 'app-addconseiller',
  templateUrl: './addconseiller.component.html',
  styleUrls: ['./addconseiller.component.css']
})
export class AddconseillerComponent implements OnInit {
 
  conseiller: Conseiler = {
    name: '',
    pays: '',
   societe: '',
    expertise: '',
    
    
  };

  imageFile: File | null = null;
 
  constructor(private conseillerService: ConseillerService) { }

  ngOnInit(): void {
    // Initialiser la propriété conseiller
    this.conseiller = {   name: '',
    pays: '',
   societe: '',
    expertise: '', };
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.imageFile = event.target.files[0];
    }
  }

  addConseiller(): void {
    if (this.conseiller.name && this.conseiller.pays && this.conseiller.societe) {
      this.conseillerService.addConseiller(this.conseiller)
        .then(() => {
          console.log('Conseiller added successfully!');
          // Réinitialiser les valeurs après l'ajout du conseiller
          this.conseiller = {   name: '',
          pays: '',
         societe: '',
          expertise: '', };
         ;
        })
        .catch((error: any) => {
          console.error('Error adding conseiller: ', error);
        });
    } else {
      console.error('All fields are required!');
    }
  }
}
