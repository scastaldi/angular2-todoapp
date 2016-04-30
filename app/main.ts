/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {TodoInputComponent} from "./todo-input.component";

@Component({
    selector: 'todo-app',
    directives: [TodoInputComponent],
    templateUrl: 'app/main.template.html'
})
class App{}
bootstrap(App);
