import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }
}





























/* subscribe code in component that needs event

sharedService.changeEmitted$.subscribe(
  loggedInStatus => {
    console.log("nterna;Component changeMitted.subscribe...");
    this.isLoggedIn = loggedInStatus;;
  });
  */


/*
 this.sharedService.emitChange("Logged In);
 */
