import {Component, OnInit} from '@angular/core';
import {AuthService, UserInterface, UserService} from '@app-core';
import {Router} from '@angular/router';
import {catchError, finalize, Observable, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private authService: AuthService, private userService: UserService, private router: Router) {}

  users?: Observable<UserInterface[]>;
  isUserLoading = true;

  logoutAndGoBack(): void {
    this.authService.logOutUser();
    this.router.navigate(['/getting-started']).then();
  }

  cardPadding(i: number): boolean {
    return i % 10 === 9;
  }

  trackByFn(index: number, user: UserInterface) {
    return user.id;
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isUserLoading = true;
    this.users = this.userService.getUsers().pipe(
      finalize(() => (this.isUserLoading = false)),
      catchError((err: HttpErrorResponse) =>
        throwError(() => {
          alert(`status:${err.status}\n
          message:'${err.message}'`);
          throw err;
        })
      )
    );
  }
}
