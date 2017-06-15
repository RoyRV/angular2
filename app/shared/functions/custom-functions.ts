import * as moment from 'moment';

export class CustomFunctions{
    isIEexplorer() {
        let ieEDGE = navigator.userAgent.match(/Edge/g);
        let ie = navigator.userAgent.match(/.NET/g); // IE 11+
        let oldIE = navigator.userAgent.match(/MSIE/g);

        return (ie || oldIE || ieEDGE);
    }

    isValidDate(date:string, format:string = "MM/DD/YYYY") {
        return moment(date, format.toUpperCase(), true).isValid();
    }

     
}