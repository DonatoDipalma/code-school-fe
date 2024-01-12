import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { UpcomingEditionsComponent } from './components/upcoming-editions/upcoming-editions.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { AddCourseFormComponent } from './components/add-course-form/add-course-form.component';
import { SuccessAddCourseFormComponent } from './components/success-add-course-form/success-add-course-form.component';
import { DetailsEditionComponent } from './details-edition/details-edition.component';
import { AddEditionFormComponent } from './components/add-edition-form/add-edition-form.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'editions', component: UpcomingEditionsComponent },
  { path: 'editions/:editionId', component: DetailsEditionComponent },
  { path: 'add-edition-form', component: AddEditionFormComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-course-form', component: AddCourseFormComponent},
  { path: 'success-add-course-form', component: SuccessAddCourseFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
