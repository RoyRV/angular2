import { Component, OnChanges, Input, Output, OnInit, EventEmitter } from '@angular/core';
@Component({
    selector: 'my-dropdown',
    moduleId: module.id,
    templateUrl: './my-dropdown.html'
})


export class MyDropdown {
    @Input() objId: string;
    @Input() name: string;
    @Input() selected: boolean;
    @Input() options: Array<any>;
    @Output() selectedChange: EventEmitter<any>;

    constructor() {
        this.selectedChange = new EventEmitter<any>();
    }

    onChange(): void {
        this.selectedChange.emit(this.selected);
    }
}