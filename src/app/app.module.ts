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
import { UpcomingEditionDetailComponent } from './components/upcoming-edition-detail/upcoming-edition-detail.component';


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
    UpcomingEditionDetailComponent
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
