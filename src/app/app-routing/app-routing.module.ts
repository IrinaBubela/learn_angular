import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from '../features/courses/courses.component';

import { AddFormComponent } from '../features/add-form/add-form.component';
import { EditFormComponent } from '../features/edit-form/edit-form.component';
import { LoginComponent } from '../features/login/login.component';
import { RegistrationComponent } from '../features/registration/registration.component';
import { AuthorizedGuard } from '../auth/guards/authorized.guard';
import { NonAuthorizedGuard } from '../auth/guards/non-authorized.guard';

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesComponent,
    children: 
      [{
        path: ':id',
        component: CoursesComponent,
        canLoad: [AuthorizedGuard]
      }] ,
    canLoad: [AuthorizedGuard]
  },
  { path: 'login', component: LoginComponent, canActivate: [NonAuthorizedGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [NonAuthorizedGuard]  },
  { path: 'courses/add', component: AddFormComponent, canLoad: [AuthorizedGuard]},
  { path: 'courses/edit', component: EditFormComponent,
    children: 
    [{
      path: ':id',
      component: EditFormComponent,
      canLoad: [AuthorizedGuard]
    }]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
 
}
