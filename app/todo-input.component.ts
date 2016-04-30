import {Component} from "angular2/core";

@Component({
    selector: 'todo-input',
    templateUrl: 'app/todo-input.template.html'
})
export class TodoInputComponent{
    onClick(value){
        console.log(value);
    }
}