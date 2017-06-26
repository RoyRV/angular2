import { Component, OnChanges, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-textbox',
    moduleId: module.id,
    templateUrl: './my-textbox.html',
    styleUrls: ['./my-textbox.css']
})
export class MyTextbox {
    @Input() objId: string;
    @Input() name: string;
    @Input() value: string;
    @Input() class: string;
    @Input() placeholder: string;
    @Output() valueChange: EventEmitter<string>;
    constructor() {
        this.valueChange = new EventEmitter<string>();
    }

    valueChanged(): void {
        this.valueChange.emit(this.value);
    }
}