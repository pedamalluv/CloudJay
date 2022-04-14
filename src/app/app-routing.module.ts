import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateProjectComponent},
  {path: 'project-details', component: ProjectDetailsComponent},
  {path: 'project-listing', component: ProjectListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
