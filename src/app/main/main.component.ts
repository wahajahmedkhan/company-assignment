import {Component, OnInit} from '@angular/core';
import {AuthService, UserInterface, UserService} from '@app-core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private authService: AuthService, private userService: UserService, private router: Router) {}

  users: UserInterface[] = [];
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
    this.loadUsers().then();
  }

  async loadUsers(): Promise<void> {
    this.isUserLoading = true;
    try {
      this.users = await this.userService.getUsers();
    } catch (e: any) {
      alert(`status:${e.status}\nmessage:'${e.message}'`);
    }
    this.isUserLoading = false;
  }
}
