import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'tasks', component: TaskTrackerComponent },
  { path: 'create', component: TaskCreatorComponent },
  { path: 'edit', component: TaskEditorComponent },
  { path: 'delete', component: TaskDeletorComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
