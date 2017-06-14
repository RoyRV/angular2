import { Component, OnChanges, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-checkbox',
    moduleId: module.id,
    templateUrl: './my-checkbox.html',
    styleUrls: ['./my-checkbox.css']
})


export class MyCheckbox     {
     

    @Input() objId: string;
    @Input() name: string;
    @Input() class: string;
    @Input() value: boolean;
    @Output() valueChange: EventEmitter<boolean>;

    constructor() {
        this.valueChange = new EventEmitter<boolean>();
    }
    
    checked() {
        this.value = !this.value;
        this.valueChange.emit(this.value);
    }
}