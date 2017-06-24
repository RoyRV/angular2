import { Component, OnChanges, Input, Output, OnInit, EventEmitter } from '@angular/core';
@Component({
    selector: 'my-label',
    moduleId: module.id,
    templateUrl: './my-label.html',
    styleUrls: ['./my-label.css']
})


export class MyLabel {
    @Input() objId: string;
    @Input() name: string;
    @Input() value: string;
}