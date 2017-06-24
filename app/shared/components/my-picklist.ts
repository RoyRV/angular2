import { Component, OnChanges, Input, Output, OnInit, EventEmitter } from '@angular/core';
@Component({
    selector: 'my-picklist',
    moduleId: module.id,
    templateUrl: './my-picklist.html',
    styleUrls: ['./my-picklist.css', './my-checkbox.css']
})

export class MyPicklist implements OnInit {
    @Input() objId: string;
    @Input() name: string;
    @Input() list: Array<any>;
    @Input() class: string = "";
    @Input() alignment: string = "";
    @Input() selectAll: boolean = false;

    private allChecked : boolean = true;
    private allIndeterminate : boolean = true;


    ngOnInit(): void {
         this.setAllChecked();
    }

    constructor(){
        this.allChecked = true;
        this.allIndeterminate = false;
    }

    checkAll():void{
        this.allChecked=!this.allChecked;
        this.allIndeterminate = false; 
        this.list.forEach(x => x.checked = this.allChecked);
    }

    singleCheck(option:any):void{
        option.checked = !option.checked;
        this.setAllChecked();
    }

    setAllChecked():void{
        if (this.selectAll) {
            let allChecked = this.list.filter(x => x.checked).length;
            //in case is 0
            if (allChecked == 0) {
                this.allChecked = false;
                this.allIndeterminate = false;
            }
            //in case all are checked
            else if (allChecked == this.list.length) {
                this.allChecked = true;
                this.allIndeterminate = false;
            }
            else {
                this.allIndeterminate = true;
                this.allChecked = false;
            }
        }
    }
}