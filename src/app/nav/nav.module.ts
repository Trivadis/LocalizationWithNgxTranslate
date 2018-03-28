import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
      CommonModule,
      TranslateModule.forChild()
  ],
  exports: [
      NavComponent
  ],
  providers: []
})

export class NavModule { }