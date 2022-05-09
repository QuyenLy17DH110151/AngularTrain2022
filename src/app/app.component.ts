import { Component } from '@angular/core';
import { User } from './user.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngForm';
  user: User = {
    username: 'milton'
  };
}
