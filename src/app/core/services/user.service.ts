import {Injectable} from '@angular/core';
import {catchError, finalize, Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {pathMaker} from '../helpers/path-maker';
import {Endpoints} from '../constants/endpoints.enum';
import {environment} from '../../../environments/environment';
import {UserInterface} from '../interfaces/user/user.interface';

const server = environment.serverURL;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  endPoints = {
    users: pathMaker([server, Endpoints.post]),
  };
  isUserLoading = true;
  users?: Observable<UserInterface[]>;

  constructor(private http: HttpClient) {}

  loadUsers(): void {
    this.isUserLoading = true;
    this.users = this.getUsers().pipe(
      finalize(() => (this.isUserLoading = false)),
      catchError((err: HttpErrorResponse) =>
        throwError(() => {
          alert(`status:${err.status}\nmessage:'${err.message}'`);
          throw err;
        })
      )
    );
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.endPoints.users);
  }
}
