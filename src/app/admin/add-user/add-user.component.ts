import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
goBack() {
throw new Error('Method not implemented.');
}
  errorMessage1: string = '';
  addUserForm!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private db: AngularFireDatabase,
    private fire: AngularFireAuth,
    private formBuilder: FormBuilder
  ) {
    this.userList = db.list('users');
  }

  userList: AngularFireList<any>;

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      CIn: ['', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(3)
      ]],
      fIrstname: ['', [
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]],
      lAstname: ['', [
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]],
      pHone: ['', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]]
    });
  }

  onSubmit() {
    this.userList.push({
      Cin: this.addUserForm.value.CIn,
      Firstname: this.addUserForm.value.fIrstname,
      Lastname: this.addUserForm.value.lAstname,
      Phone: this.addUserForm.value.pHone,
    }).then(() => {
      this.router.navigate(['/users']);
    }).catch(error => {
      console.error(error);
      this.errorMessage1 = error.message;
    });
  }
}
