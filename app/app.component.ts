import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Angular2: Getting Started</h1><br/>
        <h3>{{pageTitle}}</h3>
    `
})
export class AppComponent { 
    pageTitle : string = 'Roy Test pageTitle';
}
