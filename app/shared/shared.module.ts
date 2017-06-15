import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StartComponent } from '../shared/start.component';
import { MyCheckbox } from '../shared/components/my-checkbox';
import { MyDatebox } from '../shared/components/my-datebox';

@NgModule({
    declarations: [
        StartComponent,
        MyCheckbox,
        MyDatebox,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        StartComponent,
        MyCheckbox,
        MyDatebox
    ]
})
export class SharedModule { }