import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar'; // If using a toolbar

import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { TaskCreatorComponent } from './task-creator/task-creator.component';  // Example component
import { TaskEditorComponent } from './task-editor/task-editor.component';      // Example component
import { TaskCreatorComponent } from './components/task-creator/task-creator.component';

const routes: Routes = [
  { path: 'task-creator', component: TaskCreatorComponent },
  { path: 'task-editor', component: TaskEditorComponent },
  { path: '', redirectTo: '/task-creator', pathMatch: 'full' },  // Default route
];

@NgModule({
  declarations: [
    AppComponent,
    TaskCreatorComponent,
    TaskEditorComponent],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
