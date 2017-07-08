import { Component, OnChanges, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-radiobutton',
    moduleId: module.id,
    templateUrl: './my-radiobutton.html',
    styleUrls: ['./my-radiobutton.css']
})

export class MyRadioButton {
    @Input() objId: string;
    @Input() name: string;
    @Input() value: boolean;
    @Input() class: string;
    @Output() valueChange: EventEmitter<boolean>;

    constructor() {
        this.valueChange = new EventEmitter<boolean>();
    }

    valueChanged(): void {
        this.value = !this.value;
        this.valueChange.emit(this.value);
    }
}