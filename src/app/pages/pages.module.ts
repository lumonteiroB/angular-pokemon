import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingPagesModule } from './routing-pages.module';

//Module
import { SharedModule } from '../shared/shared.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FugitiveComponent } from '../fugitive/fugitive/fugitive.component';
import { FugitiveDivDirective } from '../fugitive/fugitive.directive';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    FugitiveComponent,
    FugitiveDivDirective
    
  ],
  imports: [
    CommonModule,
    RoutingPagesModule,
    SharedModule,
    
  ]
})
export class PagesModule { }
