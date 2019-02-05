import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { MeetingRoutingModule } from './meeting-routing/meeting-routing.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MeetingRoutingModule
  ]
})
export class MeetingModule { }
