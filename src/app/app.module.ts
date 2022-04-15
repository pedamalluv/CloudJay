import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcumComponent } from './breadcum/breadcum.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LHNComponent } from './lhn/lhn.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { SignInComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcumComponent,
    CreateProjectComponent,
    HomeComponent,
    HeaderComponent,
    LHNComponent,
    ProjectListingComponent,
    ProjectDetailsComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
