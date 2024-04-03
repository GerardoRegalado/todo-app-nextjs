import { observable, action } from 'mobx';

/**
 *  ?   observable:  
 *         defines a trackable field that stores the state.
 *  ?   action:      
 *          marks a method as an action that will modify the state.
 *  !   computed:
 *  !       Needs to study!
 */

class todoStore {
  @observable todos: string[] = [];

  @action
  addTodo(todo: string) {
    this.todos.push(todo);
  }

  @action
  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}

const TodoStore = new todoStore();
export default TodoStore;


/**
 * ! Topics for studying:
 * ?    Annotations:
 * ?        Computed,
 * ?        observable: does it works similar to observables in rxjs (Angular)???
 */
