import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CardComponent} from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';

const routes: Routes = [{path: '', component: MainComponent}];

@NgModule({
  declarations: [MainComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatGridListModule,
    MatBadgeModule,
    MatChipsModule,
  ],
})
export class MainModule {}
