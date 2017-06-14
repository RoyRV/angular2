import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-checkbox',
    moduleId: module.id,
    templateUrl: './my-checkbox.html',
    styleUrls : ['./my-checkbox.css']
})


export class MyCheckbox {
    public objId: string = 'demoPrimary';
    public name: string = 'Primary';
    public class: string = 'checkbox-primary';
    public value: boolean = false;

    constructor() {

    }

}