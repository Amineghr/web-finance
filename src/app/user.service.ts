import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.userList = db.list('users');
  }

  createUser(user: User): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.userList.push({
        Cin: user.Cin,
        Firstname: user.Firstname,
        Lastname: user.Lastname,
        Phone: user.Phone,
      }).then(() => {
        resolve();
      }).catch((error: any) => { // Specify the type of 'error' as 'any'
        console.error(error);
        reject(error);
      });
    });
  }

  getUsers(): Observable<any> {
    return this.db.list('users').snapshotChanges();
  }

  getUserById(id: any): Observable<any> {
    return this.db.list('users', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  }

  updateUser(id: any, updatedUser: Partial<User>): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.userList.update(id, updatedUser)
        .then(() => {
          resolve();
        })
        .catch((error: any) => { // Specify the type of 'error' as 'any'
          console.error(error);
          reject(error);
        });
    });
  }

  addUser(user: User): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.userList.push(user)
        .then(() => {
          resolve();
        })
        .catch((error: any) => { // Specify the type of 'error' as 'any'
          console.error(error);
          reject(error);
        });
    });
  }
}
