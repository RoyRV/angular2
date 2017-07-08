import { Component, OnChanges, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-textarea',
    moduleId: module.id,
    templateUrl: './my-textarea.html',
    styleUrls: ['./my-textarea.css']
})

export class MyTextarea {
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