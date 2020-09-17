import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginConfirmationService {
  private loginConfirmedAction = new Subject<string>();

  emitLoginConfirmedEvent(msg: string) {
    this.loginConfirmedAction.next(msg);
  }

  loginConfirmedListener() {
    return this.loginConfirmedAction.asObservable();
  }


}
