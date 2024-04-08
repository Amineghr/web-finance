import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: User[] = [];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private firebase: AngularFireDatabase,
    private userService: UserService,
    private route: ActivatedRoute,
    private db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((results) => {
      this.listUser(results);
    });
  }

  listUser(entries: any[]): void {
    this.userList = [];
    entries.forEach(element => {
      let y = element.payload.toJSON();
      y["$key"] = element.key;
      this.userList.push(y as User);
    });
  }

  openDialog(key: FirebaseOperation): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Voulez-vous vraiment supprimer ces données?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUser(key);
      }
    });
  }
  
  deleteUser(key: FirebaseOperation): void {
    try {
      this.firebase.list('users').remove(key)
        .then(() => {
          console.log("Utilisateur supprimé avec succès !");
          // Actualiser la liste des utilisateurs après la suppression
          this.userService.getUsers().subscribe((results) => {
            this.listUser(results);
          });
        })
        .catch(error => {
          console.error("Erreur lors de la suppression de l'utilisateur :", error);
        });
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur :", error);
    }
  }

  edit(userId: string) {
    this.router.navigate(['/admin/update-user', userId]);
  }
}
