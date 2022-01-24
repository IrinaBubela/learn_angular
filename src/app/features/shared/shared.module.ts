import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CourseComponent, CoursesComponent, LoginComponent, RegistrationComponent} from './components/index';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { EmailValidatorDirective } from '../login/emailValidator.directive';

@NgModule({
  declarations: [
    CourseComponent,
    CoursesComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent,
    CourseCardComponent,
    CourseListComponent,
    EmailValidatorDirective ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CourseComponent,
    CoursesComponent,
    LoginComponent,
    RegistrationComponent ,
    HeaderComponent,
    EmailValidatorDirective,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
