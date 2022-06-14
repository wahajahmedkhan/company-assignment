import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CardComponent} from './card/card.component';
import {MatBadgeModule} from '@angular/material/badge';
import {SharedModule} from '../shared/shared.module';
import {MatRippleModule} from '@angular/material/core';

const routes: Routes = [{path: '', component: MainComponent}];

@NgModule({
  declarations: [MainComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    SharedModule,
    MatRippleModule,
  ],
})
export class MainModule {}
