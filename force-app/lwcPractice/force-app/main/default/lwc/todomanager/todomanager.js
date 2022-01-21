import { createDataConnector } from "lightning/analyticsWaveApi";
import { LightningElement, track } from "lwc";
import addTodo from "@salesforce/apex/toDoController.addTodo";
import getCurrentTodos from "@salesforce/apex/toDoController.getCurrentTodos";

export default class Todomanager extends LightningElement {
  @track time = "8.20 PM";
  @track greeting = "Good Morning";

  @track todos = [];

  connectedCallback() {
    this.getTime();
    // this.populateTodos();

    this.fetchTodos();

    setInterval(() => {
      this.getTime();
    }, 1000 * 60);
  }

  getTime() {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();

    this.time = `${this.getHour(hour)}:${this.getDoubleDigit(min)} 
        ${this.getMidDay(hour)}`;

    this.setGreeting(hour);
  }

  getHour(hour) {
    return hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  }

  getMidDay(hour) {
    return hour == 12 ? "AM" : "PM";
  }

  getDoubleDigit(digit) {
    return digit < 10 ? "0" + digit : digit;
  }

  setGreeting(hour) {
    if (hour < 12) {
      this.greeting = "Good Morning";
    } else if (hour == 12 && hour == 17) {
      this.greeting = "Good Afternoon";
    } else {
      this.greeting = "Good Evening";
    }
  }

  addToDoHandler() {
    const inputBox = this.template.querySelector("lightning-input");

    const todo = {
      todoName: inputBox.value,
      done: false
    };

    addTodo({ payload: JSON.stringify(todo) })
      .then((response) => {
        console.log("item inserted successfully");
        this.fetchTodos();
      })
      .catch((error) => {
        console.error("error in inserting todo item" + error);
      });
    // this.todos.push(todo);
    inputBox.value = "";
  }

  fetchTodos() {
    getCurrentTodos()
      .then((result) => {
        if (result) {
          console.log("retrived todos from server", result.length);
          this.todos = result;
        }
      })
      .catch((error) => {
        console.error("error in fetching todos" + error);
      });
  }

  updateHandler() {
    this.fetchTodos();
  }

  deleteHandler() {
    this.fetchTodos();
  }

  get upcomingTasks() {
    return this.todos && this.todos.length
      ? this.todos.filter((todo) => !todo.done)
      : [];
  }

  get completedTasks() {
    return this.todos && this.todos.length
      ? this.todos.filter((todo) => todo.done)
      : [];
  }

  populateTodos() {
    const todos = [
      {
        todoId: 0,
        todoName: "car wash",
        done: false,
        todoDate: new Date()
      },
      {
        todoId: 0,
        todoName: "play cricket",
        done: false,
        todoDate: new Date()
      },
      {
        todoId: 0,
        todoName: "play tennis",
        done: true,
        todoDate: new Date()
      }
    ];
    this.todos = todos;
  }
}
