import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateCvComponent } from './create-cv/create-cv.component';
import { MyCvsComponent } from './my-cvs/my-cvs.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-cv', component: CreateCvComponent },
  { path: 'my-cvs', component: MyCvsComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'contact', component: ContactComponent },
];
