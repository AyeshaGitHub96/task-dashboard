import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeletorComponent } from './task-deletor.component';

describe('TaskDeletorComponent', () => {
  let component: TaskDeletorComponent;
  let fixture: ComponentFixture<TaskDeletorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDeletorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskDeletorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
