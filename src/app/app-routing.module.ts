import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { UpcomingEditionsComponent } from './components/upcoming-editions/upcoming-editions.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { AddCourseFormComponent } from './components/add-course-form/add-course-form.component';
import { SuccessAddCourseFormComponent } from './components/success-add-course-form/success-add-course-form.component';
import { DetailsEditionComponent } from './components/details-edition/details-edition.component';
import { AddEditionFormComponent } from './components/add-edition-form/add-edition-form.component';
import { SuccessAddEditionFormComponent } from './components/success-add-edition-form/success-add-edition-form.component';
import { EditionsComponent } from './components/editions/editions.component';
import { SigninComponent } from './components/signin/signin.component';
import { AssignTeacherToModuleComponent } from './components/assign-teacher-to-module/assign-teacher-to-module.component';
import { DetailsCourseComponent } from './components/details-course/details-course.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';
import { Teachers } from './components/teachers/teachers.component';
import { AddTeacherFormComponent } from './components/add-teacher-form/add-teacher-form.component';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'editions', component: EditionsComponent },
  { path: 'editions/:editionId', component: DetailsEditionComponent },
  { path: 'upcomingEditions', component: UpcomingEditionsComponent },
  { path: 'add-edition-form', component: AddEditionFormComponent },
  { path: 'success-add-edition-form', component: SuccessAddEditionFormComponent},
  { path: 'about', component: AboutUsComponent },
  { path: 'sign-in', component: SigninComponent},
  { path: 'login', component: LoginComponent },
  { path: 'add-course-form', component: AddCourseFormComponent},
  { path: 'success-add-course-form', component: SuccessAddCourseFormComponent },
  { path: 'editions/:editionId/:moduleId', component: AssignTeacherToModuleComponent },
  { path: 'courses/:courseId', component: DetailsCourseComponent},
  { path: 'teachers', component: TeachersListComponent},
  { path: 'teachers/add-teacher-form', component: AddTeacherFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
