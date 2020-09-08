import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingsListComponent } from './components/meetings-list/meetings-list.component';
import { MeetingDetailsComponent } from './components/meeting-details/meeting-details.component';
import { AddMeetingComponent } from './components/add-meeting/add-meeting.component';

const routes: Routes = [
  { path: '', redirectTo: 'meetings', pathMatch: 'full' },
  { path: 'meetings', component: MeetingsListComponent },
  { path: 'meetings/:id', component: MeetingDetailsComponent },
  { path: 'add', component: AddMeetingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
