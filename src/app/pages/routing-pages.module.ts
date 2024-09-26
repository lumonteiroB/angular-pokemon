import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FugitiveComponent } from '../fugitive/fugitive/fugitive.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'brincadeirameo',
    component: FugitiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingPagesModule { }