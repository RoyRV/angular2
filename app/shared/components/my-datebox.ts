import { Component, OnChanges, Input, Output, OnInit, EventEmitter } from '@angular/core';
let $ = require('node_modules/jquery/dist/jquery.min.js');
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
    selector: 'my-datebox',
    moduleId: module.id,
    templateUrl: './my-datebox.html',
    styleUrls: ['./my-datebox.css']
})

export class MyDatebox implements OnInit {
    @Input() objId: string = "demo";
    @Input() name: string ="demo";
    @Input() value: string ="05/28/2017";
    @Input() format: string = 'MM/DD/YYYY';
    @Input() isRequired: boolean = false;
    @Input() isValidDate: boolean = true;
    date: DateModel;
    options: DatePickerOptions;

    ngOnInit(): void {
        this.options = new DatePickerOptions();
        // let input = $('#dateboxInput' + this.objId);
        // let self = this;
        // input.datepicker({
        //     autoclose: true,
        //     format: self.format
        // })
    }


    public openCalendar():void {
        // let input = $('#dateboxInput' + this.objId);
        // input.datepicker('show');
        
    }
}