import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StartComponent } from '../shared/start.component';

@NgModule({
    declarations: [StartComponent],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        StartComponent
    ]
})
export class SharedModule{}