// src/app/services/task.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Task } from '../dto/Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksCollection = this.firestore.collection<Task>('tasks');

  constructor(private firestore: AngularFirestore) {}

  getAllTasks(): Observable<Task[]> {
    return this.tasksCollection.valueChanges({ idField: 'id' });
  }

  createTask(task: Task): Promise<void> {
    const id = this.firestore.createId();
    return this.tasksCollection.doc(id).set({ ...task, id });
  }

  updateTaskStatus(task: Task): Promise<void> {
    return this.tasksCollection.doc(task.id).update({
      status: task.status,
    });
  }

  updateTask(task: Task): Promise<void> {
    return this.tasksCollection.doc(task.id).update(task);
  }

  deleteTask(taskId: string): Promise<void> {
    return this.tasksCollection.doc(taskId).delete();
  }
}
