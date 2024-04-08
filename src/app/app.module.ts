import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { UserlayoutComponent } from './user/userlayout/userlayout.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ConfirmationDialogComponent } from './admin/confirmation-dialog/confirmation-dialog.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { UsersComponent } from './admin/users/users.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { HomeComponent } from './user/home/home.component';
import { ProfilComponent } from './admin/profil/profil.component';
import { MoreComponent } from './user/more/more.component';

import { FormComponent } from './user/form/form.component';
import { ConseillerComponent } from './user/conseiller/conseiller.component';
import { RendezvousFormComponent } from './user/rendez-vous/rendezvous-form.component';

import { AddconseillerComponent } from './admin/addconseiller/addconseiller.component';
import { UpdateconseillerComponent } from './admin/updateconseiller/updateconseiller.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { GestionconseillerComponent } from './admin/gestionconseiller/gestionconseiller.component';
import { ProfileComponent } from './user/profile/profile.component';











@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    UsersComponent,
    RegisterComponent,
    ResetpasswordComponent,
    AddUserComponent,
    UpdateUserComponent,
    ConfirmationDialogComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AdminlayoutComponent,
    UserlayoutComponent,
    ProfilComponent,
    MoreComponent,

    FormComponent,
     ConseillerComponent,
     FormComponent,
     RendezvousFormComponent,
   
     AddconseillerComponent,
     UpdateconseillerComponent,
     GestionconseillerComponent,
     ProfileComponent,
 
   

   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
  
    MatDialogModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp({"projectId":"angular-fa405","appId":"1:329164164436:web:a06896e0278f7c8ac60cc1","databaseURL":"https://angular-fa405-default-rtdb.firebaseio.com","storageBucket":"angular-fa405.appspot.com","apiKey":"AIzaSyB46lsymsFw9l3BG4PTb0u_Ufy8On0SdfU","authDomain":"angular-fa405.firebaseapp.com","messagingSenderId":"329164164436","measurementId":"G-7GP4RVJ8Z1"})),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
