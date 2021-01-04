import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { WorkExperienceModule } from './work-experience/work-experience.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillsModule } from './skills/skills.module';
import { LanguageModule } from './language/language.module';
import { EducationModule } from './education/education.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SkillsModule,
    HeaderModule,
    LanguageModule,
    FontAwesomeModule,
    HobbiesModule,
    EducationModule,
    WorkExperienceModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
