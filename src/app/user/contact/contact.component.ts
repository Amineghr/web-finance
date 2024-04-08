import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  successMessage: string | undefined;


  constructor(private firestore: AngularFirestore) { }

  sendMessage(messageForm: NgForm) {
    const message = messageForm.value;
    this.firestore.collection('messages').add(message)
      .then(() => {
        console.log('Message sent successfully!');
        this.successMessage = 'Message sent successfully!';
        messageForm.reset();
      })
      .catch((error) => {
        console.error('Error sending message: ', error);
        this.successMessage = 'Failed to send message. Please try again later.';
      });
  }
}
