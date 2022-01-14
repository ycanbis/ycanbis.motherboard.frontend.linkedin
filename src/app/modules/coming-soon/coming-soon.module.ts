import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';



@NgModule({
  declarations: [
    ComingSoonComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [ComingSoonComponent]
})
export class ComingSoonModule { }
