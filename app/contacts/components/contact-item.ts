import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ContactModel} from '../services/contact-model';
import {RouterLink} from 'angular2/router';
import {HoverBlurrDirective} from '../../common/directives/on-hover-directive';
import {PaddingDirective} from '../../common/directives/padding-directive';

@Component({ 
    selector: 'contact-item', 
    templateUrl: 'app/contacts/components/contact-item.html',
    directives: [RouterLink, HoverBlurrDirective, PaddingDirective],
    styleUrls: ['app/styles/contact-item.css']
})
export class ContactItem{
    @Input()contact: ContactModel;
    @Output() selected = new EventEmitter<ContactModel>();
}