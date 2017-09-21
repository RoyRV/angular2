import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StartComponent } from '../shared/start.component';
import { MyCheckbox } from '../shared/components/my-checkbox';
import { MyDropdown } from '../shared/components/my-dropdown';
import { MyLabel } from '../shared/components/my-label';
import { MyPicklist } from '../shared/components/my-picklist';
import { MyTextbox } from '../shared/components/my-textbox';
import { MyRadioButton } from '../shared/components/my-radiobutton';
import { MyTextarea } from '../shared/components/my-textarea';


@NgModule({
    declarations: [
        StartComponent,
        MyCheckbox,
        MyDropdown ,
        MyLabel,
        MyPicklist,
        MyTextbox,
        MyRadioButton,
        MyTextarea
    ],
    imports: [
        CommonModule, 
        FormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        StartComponent,
        MyCheckbox,
        MyDropdown ,
        MyLabel,
        MyPicklist,
        MyTextbox,
        MyRadioButton,
        MyTextarea
    ]
})
export class SharedModule { }