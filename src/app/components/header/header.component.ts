import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: string;
  title = 'SharedService Router Communication Demo';

  constructor(public sharedService: SharedService) {
    sharedService.changeEmitted$.subscribe(
      loggedInStatus => {
        console.log('HeaderComponent changeEmitted.subscribe...');
        this.isLoggedIn = loggedInStatus;
        console.log('this.isLoggedIn = ' + this.isLoggedIn);
      });
  }

  ngOnInit() {
  }

}
