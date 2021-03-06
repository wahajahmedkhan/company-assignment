import {Injectable} from '@angular/core';
import {lastValueFrom} from 'rxjs';
import {HttpClient} from '@angular/common/http';
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

  constructor(private http: HttpClient) {}

  getUsers(): Promise<UserInterface[]> {
    return lastValueFrom(this.http.get<UserInterface[]>(this.endPoints.users));
  }
}
