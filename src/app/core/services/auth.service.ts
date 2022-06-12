import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserLoggedInSubject = new BehaviorSubject(false);

  get isUserLoggedIn(): Observable<boolean> {
    return this.isUserLoggedInSubject.asObservable();
  }

  logInUser(): void {
    this.isUserLoggedInSubject.next(true);
  }

  logOutUser(): void {
    this.isUserLoggedInSubject.next(false);
  }
}
