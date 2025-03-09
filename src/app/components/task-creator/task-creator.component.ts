// src/app/components/task-creator/task-creator.component.ts
import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/dto/Task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss'],
})
export class TaskCreatorComponent {
  task: Task = {
    id: '',
    name: '',
    description: '',
    dueDate: '',
    status: 'pending',
  };

  constructor(private taskService: TaskService, private router: Router) {}

  createTask(): void {
    this.taskService.createTask(this.task).then(() => {
      this.router.navigate(['/tasks']);
    });
  }

  resetForm(): void {
    this.task = {
      id: '',
      name: '',
      description: '',
      dueDate: '',
      status: 'pending',
    };
  }
}

