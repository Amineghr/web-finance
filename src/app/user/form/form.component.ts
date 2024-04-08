import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  conseilForm!: FormGroup;
  resultat: any;

  constructor() { }

  ngOnInit() {
    this.conseilForm = new FormGroup({
      montant: new FormControl(null),
      duree: new FormControl(null),
      tauxInteret: new FormControl(null),
      toleranceRisque: new FormControl(null),
      objectifs: new FormControl(null)
    });
  }

  simuler() {
    const montant = this.conseilForm?.get('montant')?.value;
    const duree = this.conseilForm?.get('duree')?.value;
    const tauxInteret = this.conseilForm?.get('tauxInteret')?.value;
    const toleranceRisque = this.conseilForm?.get('toleranceRisque')?.value;
    const objectifs = this.conseilForm?.get('objectifs')?.value;

    const montantFinal = montant * Math.pow((1 + tauxInteret/100), duree);
    const interetsTotaux = montantFinal - montant;

    let conseils = "Consultez un professionnel financier pour des conseils personnalisés.";

    if (toleranceRisque === "faible") {
      conseils = "Privilégiez les placements stables à faible rendement.";
    } else if (toleranceRisque === "elevee") {
      conseils = "Envisagez des placements plus risqués à fort rendement potentiel.";
    }

    // Adapter les conseils en fonction des objectifs financiers (non implémenté ici pour simplifier)
    // ...

    this.resultat = {
      montantFinal,
      interetsTotaux,
      conseils
    };
  }
}
