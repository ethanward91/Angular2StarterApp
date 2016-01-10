import {Component} from 'angular2/core'
import {RouterLink} from 'angular2/router';

@Component({ 
    selector: 'nav-menu', 
    templateUrl: 'app/nav/components/nav.html',
    directives: [RouterLink],
    styleUrls: ['app/nav/components/nav.css']
})
export class NavComponent{}