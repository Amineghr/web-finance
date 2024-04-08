import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  constructor(private authservice: AuthService) {
    var firebaseConfig = {
  apiKey: "AIzaSyB46lsymsFw9l3BG4PTb0u_Ufy8On0SdfU",
  authDomain: "angular-fa405.firebaseapp.com",
  projectId: "angular-fa405",
  storageBucket: "angular-fa405.appspot.com",
  messagingSenderId: "329164164436",
  appId: "1:329164164436:web:a06896e0278f7c8ac60cc1",
  measurementId: "G-7GP4RVJ8Z1"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
