import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-data-binding-assignment';

  username: string = '';

  isUsernameEmptyString() {
    if (this.username.trim() == '') {
      return true;
    } 

    return false;
  }

  onClickResetUsername() {
    this.username = '';
  }
}
