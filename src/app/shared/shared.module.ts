import {NgModule} from '@angular/core';
import {SpinnerLoaderDirective} from './directive/spinner-loader.directive';

@NgModule({
  declarations: [SpinnerLoaderDirective],
  exports: [SpinnerLoaderDirective],
})
export class SharedModule {}
