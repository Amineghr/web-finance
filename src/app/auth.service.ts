import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User | null>;
  
  createNewUser(email: any, password: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private afAuth: AngularFireAuth, private router: Router, ) {
    this.user = afAuth.authState;
  }

  resetPassword(email: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().sendPasswordResetEmail(email).then(
          () => {
            resolve(true)
            console.log("we've sent you a password reset link")


          },
          (error) => {
            reject(error);
          }
        );

      }
    );
  }
  //regiter
  signup(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve(true)
          },
          (error) => {
            reject(error)
          }
        )

      }
    )
  }
  //login
  signInUser(email: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(() => {
          resolve();
          // Rediriger l'utilisateur vers la page souhaitée après connexion
          // Ici, vous pouvez définir la redirection en fonction du rôle de l'utilisateur
          if (email === 'admin@gmail.com') {
            this.router.navigateByUrl('/admin');
          } else {
            this.router.navigateByUrl('/user');
          }
        })
        .catch((error: any) => reject(error));
    });
  }



}
