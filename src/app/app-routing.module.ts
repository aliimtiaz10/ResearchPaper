import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaperComponent } from './paper/paper.component';
import { ManupilateComponent } from './manupilate/manupilate.component';

const routes: Routes = [
  { path: '', redirectTo: '/paper', pathMatch: 'full' },
  { path: 'paper', component: PaperComponent },
  { path: 'manupilate', component: ManupilateComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
