import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  { path: '', component: TrainingComponent},
  { path: 'meeting', loadChildren: './meeting/meeting.module#MeetingModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
