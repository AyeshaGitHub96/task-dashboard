import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task } from '..dto/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // constructor(private firestore: AngularFirestore) {}

  // createTask(task: Task): Observable<any> {
  //   return this.firestore.collection('tasks').add(task);
  // }
}
