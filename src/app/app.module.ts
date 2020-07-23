import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { ContactComponent } from './contact/contact.component';
import { FreestudyComponent } from './freestudy/freestudy.component';
import { AddtutorComponent } from './addtutor/addtutor.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdatesComponent } from './updates/updates.component';
import { PostcontentComponent } from './postcontent/postcontent.component';
import { ViewcontentComponent } from './viewcontent/viewcontent.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfileComponent,
    DiscussionComponent,
    AddbooksComponent,
    ViewbooksComponent,
    AddprofileComponent,
    ContactComponent,
    FreestudyComponent,
    AddtutorComponent,
    AddstudentComponent,
    UpdatesComponent,
    PostcontentComponent,
    ViewcontentComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
