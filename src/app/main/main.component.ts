import {Component} from '@angular/core';
import {AuthService} from '@app-core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private authService: AuthService, private router: Router) {}

  users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 23, 4, 5, 6, 6, 7, 8, 9, 9, 1, 2, 2];

  logoutAndGoBack() {
    this.authService.logOutUser();
    this.router.navigate(['/getting-started']).then();
  }

  cardPadding(i: number): boolean {
    return i % 10 === 9;
  }
}
