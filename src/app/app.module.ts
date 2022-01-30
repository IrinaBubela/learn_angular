import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AddFormComponent } from './features/add-form/add-form.component';
import { EditFormComponent } from './features/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddFormComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Window],
  bootstrap: [AppComponent]
})
export class AppModule { }
