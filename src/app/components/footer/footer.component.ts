import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isLoggedIn: string;

  constructor(private sharedService: SharedService) {
    sharedService.changeEmitted$.subscribe(
      loggedInStatus => {
        console.log('FooterComponent changeEmitted.subscribe...');
        this.isLoggedIn = loggedInStatus;
      });
  }

  ngOnInit() {
  }

}
