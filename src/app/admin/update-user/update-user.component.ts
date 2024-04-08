import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id: any;
  errorMessage: string = '';
  formGroup!: FormGroup;
  errorMessage1: string = '';
  userdetails: any = [];
  data = {
    Cin: '',
    Firstname: '',
    Lastname: '',
    Phone: ''
  };
  id1: any;

  constructor(private router: Router, private firebase: AngularFireDatabase,
              private route: ActivatedRoute, private userService: UserService,
              private changeDetectorRef: ChangeDetectorRef) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      CIn: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      fIrstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      lAstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      pHone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ])
    });

    this.userService.getUserById(this.id).subscribe((results) => {
      this.getuser(results);
    });
  }

  getuser(entries: any[]) {
    this.userdetails = [];
    entries.forEach(element => {
      let y = element.payload.toJSON();
      y["$key"] = element.key;
      this.userdetails.push(y as User);
      this.data.Cin = this.userdetails[0]['Cin'];
      this.data.Firstname = this.userdetails[0]['Firstname'];
      this.data.Lastname = this.userdetails[0]['Lastname'];
      this.data.Phone = this.userdetails[0]['Phone'];
    });
  }

  async onSubmit1() {
    try {
      await this.userService.updateUser(this.id, {
        Cin: this.data.Cin,
        Firstname: this.data.Firstname,
        Lastname: this.data.Lastname,
        Phone: this.data.Phone
      });
      console.log('User updated successfully!');
      this.userService.getUserById(this.id).subscribe((results) => {
        this.getuser(results);
        this.changeDetectorRef.detectChanges();
      });
      this.router.navigate(['/admin/users']);
    } catch (error: any) {
      console.error('Error updating user:', error);
      this.errorMessage1 = error.message || 'An error occurred while updating user.';
    }
  }
}
