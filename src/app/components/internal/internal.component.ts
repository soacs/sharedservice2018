import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared/shared.service';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.css']
})
export class InternalComponent implements OnInit {
  isLoggedIn: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.isLoggedIn = 'LoggedIn';
     this.sharedService.emitChange('LoggedIn');
  }

}
