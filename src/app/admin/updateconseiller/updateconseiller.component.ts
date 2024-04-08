import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Conseiler } from 'src/app/conseiler';
import { ConseillerService } from 'src/app/conseiller.service';

@Component({
  selector: 'app-updateconseiller',
  templateUrl: './updateconseiller.component.html',
  styleUrls: ['./updateconseiller.component.css']
})
export class UpdateconseillerComponent implements OnInit {
  conseillerId: string;
  errorMessage: string = '';
  formGroup!: FormGroup;
  errorMessage1: string = '';
  conseillerDetails: Conseiler | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private conseillerService: ConseillerService) {
    this.conseillerId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      pays: new FormControl('', [
        Validators.required
      ]),
      societe: new FormControl('', [
        Validators.required
      ]),
      expertise: new FormControl('', [
        Validators.required
      ]),
      imageUrl: new FormControl('', [
        Validators.required
      ])
    });

    this.conseillerService.getConseillerById(this.conseillerId).subscribe((result: Conseiler) => {
      this.conseillerDetails = result;
      this.formGroup.patchValue({
        name: this.conseillerDetails.name,
        pays: this.conseillerDetails.pays,
        societe: this.conseillerDetails.societe,
        expertise: this.conseillerDetails.expertise,
        imageUrl: this.conseillerDetails.imageUrl
      });
    });
  }

  async onSubmit(): Promise<void> {
    try {
      await this.conseillerService.updateConseiller(this.conseillerId, this.formGroup.value);
      console.log('Conseiller updated successfully!');
      this.router.navigate(['/admin/conseillers']);
    } catch (error: any) {
      console.error('Error updating conseiller:', error);
      this.errorMessage1 = error.message || 'An error occurred while updating conseiller.';
    }
  }
}


