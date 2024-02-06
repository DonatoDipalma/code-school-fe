import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Footer } from './components/footer/footer.component';
import { Teachers } from './components/teachers/teachers.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { UpcomingEditionsComponent } from './components/upcoming-editions/upcoming-editions.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { AddCourseFormComponent } from './components/add-course-form/add-course-form.component';
import { MenuComponent } from './components/menu/menu.component';
import { SuccessAddCourseFormComponent } from './components/success-add-course-form/success-add-course-form.component';
import { DetailsEditionComponent } from './components/details-edition/details-edition.component';
import { AddEditionFormComponent } from './components/add-edition-form/add-edition-form.component';
import { SuccessAddEditionFormComponent } from './components/success-add-edition-form/success-add-edition-form.component';
import { EditionsComponent } from './components/editions/editions.component';
import { SigninComponent } from './components/signin/signin.component';
import { AssignTeacherToModuleComponent } from './components/assign-teacher-to-module/assign-teacher-to-module.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { SuccessAddTeacherFormComponent } from './components/success-add-teacher-form/success-add-teacher-form.component';
import { TeacherRoomComponent } from './components/teacher-room/teacher-room.component';
import { TeacherModuleComponent } from './components/teacher-module/teacher-module.component';import { UpcomingEditionComponent } from './components/upcoming-editions/upcoming-edition/upcoming-edition.component';


@NgModule({
  declarations: [
    AppComponent,
    Footer,
    Teachers,
    TeacherCardComponent,
    HomeComponent,
    CoursesComponent,
    UpcomingEditionsComponent,
    AboutUsComponent,
    LoginComponent,
    AddCourseFormComponent,
    MenuComponent,
    SuccessAddCourseFormComponent,
    UpcomingEditionComponent,
    DetailsEditionComponent,
    AddEditionFormComponent,
    SuccessAddEditionFormComponent,
    EditionsComponent,
    SigninComponent,
    AssignTeacherToModuleComponent,
    CourseDetailsComponent,
    AddTeacherComponent,
    SuccessAddTeacherFormComponent,
    TeacherRoomComponent,
    TeacherModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
