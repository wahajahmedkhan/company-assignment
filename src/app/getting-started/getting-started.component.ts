import {Component} from '@angular/core';
import {AuthService} from '@app-core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-getting-started-component',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
})
export class GettingStartedComponent {
  constructor(private authService: AuthService, private router: Router) {}

  start(): void {
    this.authService.logInUser();
    this.router.navigate(['/app']);
  }
}
