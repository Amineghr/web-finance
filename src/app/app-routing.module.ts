import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ConfirmationDialogComponent } from './admin/confirmation-dialog/confirmation-dialog.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { UsersComponent } from './admin/users/users.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { HomeComponent } from './user/home/home.component';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { UserlayoutComponent } from './user/userlayout/userlayout.component';
import { ProfilComponent } from './admin/profil/profil.component';
import { MoreComponent } from './user/more/more.component';

import { FormComponent } from './user/form/form.component';
import { ConseillerComponent } from './user/conseiller/conseiller.component';
import { RendezvousFormComponent } from './user/rendez-vous/rendezvous-form.component';

import { AddconseillerComponent } from './admin/addconseiller/addconseiller.component';
import { UpdateconseillerComponent } from './admin/updateconseiller/updateconseiller.component';
import { GestionconseillerComponent } from './admin/gestionconseiller/gestionconseiller.component';
import { ProfileComponent } from './user/profile/profile.component';








const routes: Routes = [
  //la permiére page home
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'footer', component: FooterComponent },
  
  { path: 'admin',component:AdminlayoutComponent,
  children:[
    { path: 'users', component: UsersComponent },
    { path: 'adduser', component: AddUserComponent },
    { path: 'update-user/:id', component: UpdateUserComponent },
    { path: 'liste', component: GestionconseillerComponent },
    { path: 'addconseiller', component: AddconseillerComponent },
    { path: 'updateconseiller/:id', component: UpdateconseillerComponent },
    { path: 'confirmation-dialog', component: ConfirmationDialogComponent },
    { path: 'profil', component: ProfilComponent },


  ]
},
{ path: 'user',component:UserlayoutComponent,
  children:[
    { path: 'rendezvousform', component: RendezvousFormComponent },
    { path: 'conseiller', component: ConseillerComponent },
    { path: 'more', component: MoreComponent },
    { path: 'Form', component: FormComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  ]
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
