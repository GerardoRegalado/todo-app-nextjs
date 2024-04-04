
// --> Package Imports
import { action, makeAutoObservable } from 'mobx';

class todoStore {
  public todos: Task[] = [];

  /**
   * * setting up the class to be an observable
   */
  constructor() {
    makeAutoObservable(this)
  }
  

  /**
   * * it pushes the task into the todos array modifying the state of the todo list.
   * @param todo as string.
   */
  @action
  addTask(todo: string): void {
    const newTask = { // -> in order to comply with Task interface and setting up the done property as false;
      title: todo, 
      done: false,
    } 
    this.todos.push(newTask);
  }

  /**
   * * it splices the task into the todos array from the index passed as argument.
   * @param index as number
   */
  @action
  removeTask(index: number): void {
    this.todos.splice(index, 1)
  }

  /**
   * * it marks a task as done or not done with each click in the checkbox located in taskCard component.
   * @param index as number
   */
  @action
  toggleDone(index: number): void {
    this.todos[index].done = !this.todos[index].done
  }
}

const TodoStore = new todoStore();
export default TodoStore;

/**
 * -----------------------------------------------------------------------------------------
 *  *   Notes:
 * 
 *  ?   observable:  
 *         defines a trackable field that stores the state.
 *  ?   action:      
 *          marks a method as an action that will modify the state.
 *  !   computed:
 *  !       Needs to study!
 *  ?   makeAutoObservable:
 *          is an easy way to convert to observables fields and methods.
 */

/**
 * ! Topics for studying:
 * ?    Annotations:
 * ?        Computed,
 * ?        observable: does it works similar to observables in rxjs (Angular)???
 * ?    differences between makeObservable and makeAutoObservable in Mobx;
 *     
 * --------------------------------------------------------------------------------------------
 */
