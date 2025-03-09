// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { initializeApp } from '@angular/fire/app';
import { TaskTrackerComponent } from './components/task-tracker/task-tracker.component';
import { TaskCreatorComponent } from './components/task-creator/task-creator.component';
import { TaskEditorComponent } from './components/task-editor/task-editor.component';
import { AppRoutingModule } from './app-routing.module';
import { provideStorage, getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [TaskTrackerComponent, TaskCreatorComponent, TaskEditorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    initializeApp(environment.firebaseConfig), // Initialize Firebase app
  ],
  providers: [],
  bootstrap: [TaskTrackerComponent],
})
export class AppModule {}
