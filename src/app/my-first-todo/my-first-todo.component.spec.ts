import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstTodoComponent } from './my-first-todo.component';

describe('MyFirstTodoComponent', () => {
  let component: MyFirstTodoComponent;
  let fixture: ComponentFixture<MyFirstTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFirstTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
