import { LightningElement, api } from 'lwc';
import updateTodo from '@salesforce/apex/toDoController.updateTodo';
import deleteTodo from '@salesforce/apex/toDoController.deleteTodo';

export default class ToDoItem extends LightningElement {
    @api todoId;
    @api todoName;
    @api done = false;

    get containerClass(){
        return this.done ? "todo completed" : "todo upcoming";
    }

    geticonName(){
        return this.done ? "utility:check" : "utility:add"
    }

    updateHandler(){
        const todo = {
            todoId: this.todoId,
            todoName: this.todoName,
            done: !this.done
        };

        updateTodo({payload: JSON.stringify(todo)})
        .then(result => {
            console.log("item updated sucessfully");
            const updateEvent = new CustomEvent("update");
            this.dispatchEvent(updateEvent);
        }).catch(error => {
            console.error("error in update todos" + error);
        })
    }

    deleteHandler(){
        deleteTodo({todoId: this.todoId}).then(result => {
            console.log("item deleted sucessfully");
            const deleteEvent = new CustomEvent("delete");
            this.dispatchEvent(deleteEvent);
        }).catch(error=>{
            console.error("error in delete todos" + error);
        })
    }

}