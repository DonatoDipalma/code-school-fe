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
import { AllTeachersComponent } from './components/all-teachers/all-teachers.component';
import { AddTeacherFormComponent } from './components/add-teacher-form/add-teacher-form.component';
import { SuccessAddTeacherFormComponent } from './components/success-add-teacher-form/success-add-teacher-form.component';
import { DetailCourseComponent } from './components/detail-course/detail-course.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:courseId', component: DetailCourseComponent },
  { path: 'editions', component: EditionsComponent },
  { path: 'teachers', component: AllTeachersComponent  },
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
  { path: 'add-teacher-form',component:AddTeacherFormComponent},
  { path: 'success-add-teacher-form',component:SuccessAddTeacherFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

