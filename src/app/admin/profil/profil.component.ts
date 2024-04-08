// profil.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profilForm!: FormGroup; // Ajoutez un point d'exclamation pour indiquer que le formulaire est initialisé dans le constructeur

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profilForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]
    });

    // Simuler des données de profil préremplies
    this.profilForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890'
    });
  }

  // Méthode pour soumettre le formulaire
  submit(): void {
    if (this.profilForm.valid) {
      // Effectuer des actions de sauvegarde ou de mise à jour du profil ici
      console.log(this.profilForm.value);
    } else {
      // Marquer tous les champs du formulaire comme touchés pour afficher les erreurs de validation
      this.profilForm.markAllAsTouched();
    }
  }
}
