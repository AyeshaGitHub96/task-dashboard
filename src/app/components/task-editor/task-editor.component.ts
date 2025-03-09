// src/app/components/task-editor/task-editor.component.ts
import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/dto/Task';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss'],
})
export class TaskEditorComponent {
  task$: Observable<Task>;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.task$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const taskId = params.get('id');
        return this.taskService.getAllTasks().pipe(
          switchMap((tasks) =>
            tasks.filter((task) => task.id === taskId ? task : null)
          )
        );
      })
    );
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task).then(() => {
      this.router.navigate(['/tasks']);
    });
  }

  resetForm(): void {
    // Reset the form to initial state
  }
}

