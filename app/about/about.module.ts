import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { AboutMainComponent } from './aboutMain.component'; 
import { AboutCheckbox } from './components/aboutCheckbox';

import { AboutDropdown } from './components/aboutDropdown';
import { AboutLabel } from './components/aboutLabel';
import { AboutPicklist } from './components/aboutPicklist';
import { AboutTextbox } from './components/aboutTextbox';
import { AboutRadioButton } from './components/aboutRadioButton';
import { AboutTextarea } from './components/aboutTextarea';

@NgModule({
    declarations: [
        AboutMainComponent,
        AboutCheckbox,
        
        AboutDropdown,
        AboutLabel,
        AboutPicklist,
        AboutTextbox,
        AboutRadioButton,
        AboutTextarea
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'about', component: AboutMainComponent },
            { path: 'aboutCheckbox', component: AboutCheckbox }, 
            
            { path: 'aboutDropdown', component: AboutDropdown },
            { path: 'aboutLabel', component: AboutLabel },
            { path: 'aboutPicklist', component: AboutPicklist },
            { path: 'aboutTextbox', component: AboutTextbox },
            { path: 'aboutRadioButton', component: AboutRadioButton },
            { path: 'aboutTextarea', component: AboutTextarea }
        ])
    ],
    providers: [ 
    ]
})

export class AboutModule{

}