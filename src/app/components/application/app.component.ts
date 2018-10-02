import { Component } from '@angular/core';
import {SharedService} from '../../services/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SharedService Router Communication Demo';
  isLoggedIn: string;

  constructor(private sharedService: SharedService) {
    sharedService.changeEmitted$.subscribe(
      loggedInStatus => {
        console.log('InternalComponent changeEmitted.subscribe...');
        this.isLoggedIn = loggedInStatus;
      });
  }
}
