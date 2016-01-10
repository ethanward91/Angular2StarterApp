import {Component} from 'angular2/core'
import {RouterLink} from 'angular2/router';
import {HoverBlurr} from '../../common/common'

@Component({ 
    selector: 'nav-menu', 
    templateUrl: 'app/nav/components/nav.html',
    directives: [RouterLink, HoverBlurr],
    styleUrls: ['app/nav/components/nav.css']
})
export class NavComponent{}