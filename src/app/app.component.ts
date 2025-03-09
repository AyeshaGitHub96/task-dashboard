import { Component } from '@angular/core';
import { TaskCreatorComponent } from "./components/task-creator/task-creator.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [TaskCreatorComponent]
})
export class AppComponent {
  title = 'task-manage-app';
}
