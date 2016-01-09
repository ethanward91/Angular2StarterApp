import {Component} from 'angular2/core'
import {RouterLink} from 'angular2/router';

@Component({ 
    selector: 'nav-menu', 
    templateUrl: 'app/nav/nav.html',
    directives: [RouterLink]
})
export class NavComponent{}