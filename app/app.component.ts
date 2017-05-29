import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Angular2: Getting Started</h1><br/>
        <div>
            <pm-products></pm-products>
        </div>
    `
})
export class AppComponent { 
    pageTitle : string = 'Roy Test pageTitle';
}
