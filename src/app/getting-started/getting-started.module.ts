import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GettingStartedComponent} from './getting-started.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: GettingStartedComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule, MatIconModule],
  declarations: [GettingStartedComponent],
})
export class GettingStartedModule {}
