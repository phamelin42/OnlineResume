import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbiesComponent } from './hobbies.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [HobbiesComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [HobbiesComponent]
})
export class HobbiesModule { }
