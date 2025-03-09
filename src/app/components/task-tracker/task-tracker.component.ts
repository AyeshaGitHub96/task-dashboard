// src/app/components/task-tracker/task-tracker.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/dto/Task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.scss'],
})
export class TaskTrackerComponent implements OnInit {
  tasks$: Observable<Task[]>;
  filterStatus: string = 'all';
  displayedColumns: string[] = ['name', 'status', 'actions'];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getAllTasks();
  }

  updateTaskStatus(task: Task): void {
    task.status = task.status === 'pending' ? 'completed' : 'pending';
    this.taskService.updateTaskStatus(task).catch((error) => {
      console.error('Error updating task status', error);
    });
  }

  editTask(task: Task): void {
    // Navigate to the task editor with task data
  }

  deleteTask(task: Task): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(task.id).catch((error) => {
        console.error('Error deleting task', error);
      });
    }
  }
}

