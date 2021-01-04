import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    NgbProgressbarModule,
  ],
  exports: [SkillsComponent]
})
export class SkillsModule { }
