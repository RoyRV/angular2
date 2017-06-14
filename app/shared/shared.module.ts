import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StartComponent } from '../shared/start.component';
import { MyCheckbox } from '../shared/components/my-checkbox';

@NgModule({
    declarations: [
        StartComponent,
        MyCheckbox
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        StartComponent,
        MyCheckbox
    ]
})
export class SharedModule { }