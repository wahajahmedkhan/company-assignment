import {Component, OnInit} from '@angular/core';
import {AuthService, UserInterface, UserService} from '@app-core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private authService: AuthService, public userService: UserService, private router: Router) {}

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
    if (this.userService.isUserLoading) {
      this.userService.loadUsers();
    } else {
      this.userService.loadUsers(true);
    }
  }
}
