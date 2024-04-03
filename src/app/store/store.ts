import { action, makeAutoObservable } from 'mobx';

/**
 *  ?   observable:  
 *         defines a trackable field that stores the state.
 *  ?   action:      
 *          marks a method as an action that will modify the state.
 *  !   computed:
 *  !       Needs to study!
 *  ?   makeAutoObservable:
 *          is an easy way to convert to observables fields and methods.
 */


class todoStore {
  public todos: string[] = [];

  /**
   * setting up the class to be an observable
   */
  constructor() {
    makeAutoObservable(this)
  }
  

  /**
   * it pushes the task into the `todos` array modifying the state of the todo list.
   * @param todo as string.
   */
  @action
  addTodo(todo: string) {
    this.todos.push(todo);
  }

  /**
   * it splices the task into the `todos` array from the index passed as argument.
   * @param index as number
   */
  @action
  removeTodo(index: number) {
    this.todos.splice(index, 1)
  }
}

const TodoStore = new todoStore();
export default TodoStore;


/**
 * ! Topics for studying:
 * ?    Annotations:
 * ?        Computed,
 * ?        observable: does it works similar to observables in rxjs (Angular)???
 * ?    differences between makeObservable and makeAutoObservable in Mobx;
 * ?    
 */
