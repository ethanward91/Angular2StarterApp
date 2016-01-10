import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ContactModel} from '../services/contact-model';
import {RouterLink} from 'angular2/router';
import {COMMON_APP_DIRECTIVES} from '../../common/common';

@Component({ 
    selector: 'contact-item', 
    templateUrl: 'app/contacts/components/contact-item.html',
    directives: [RouterLink, COMMON_APP_DIRECTIVES],
    styleUrls: ['app/styles/contact-item.css']
})
export class ContactItem{
    @Input()contact: ContactModel;
    @Output() selected = new EventEmitter<ContactModel>();
}