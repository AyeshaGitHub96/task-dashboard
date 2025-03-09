// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTrackerComponent } from './components/task-tracker/task-tracker.component';
import { TaskCreatorComponent } from './components/task-creator/task-creator.component';
import { TaskEditorComponent } from './components/task-editor/task-editor.component';

const routes: Routes = [
  { path: 'tasks', component: TaskTrackerComponent },
  { path: 'create', component: TaskCreatorComponent },
  { path: 'edit/:id', component: TaskEditorComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
