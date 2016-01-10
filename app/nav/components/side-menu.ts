import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {HoverBlurr} from '../../common/common';

@Component({ 
    selector: 'side-menu', 
    directives: [HoverBlurr, RouterLink],
    templateUrl: 'app/nav/components/side-menu.html',
    styleUrls: ['app/nav/components/side-menu.css']
})
export class SideMenuComponent{
    
}