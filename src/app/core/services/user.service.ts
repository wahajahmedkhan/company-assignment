import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {pathMaker} from '../helpers/path-maker';
import {Endpoints} from '../constants/endpoints.enum';
import {environment} from '../../../environments/environment';
import {UserInterface} from '../interfaces/user/user.interface';

const server = environment.serverURL;
const api = Endpoints.api;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  endPoints = {
    user: pathMaker([server, api, Endpoints.user]),
  };

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    return this._http.get<UserInterface[]>(this.endPoints.user);
  }
}
