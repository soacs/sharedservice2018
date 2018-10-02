import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: string;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.isLoggedIn = '';
    this.sharedService.emitChange('');
  }
}
