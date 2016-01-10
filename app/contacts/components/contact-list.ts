import {Component} from 'angular2/core'
import {ContactsService} from '../services/contacts-service';
import {ContactModel} from '../services/contact-model';
import {ContactItem} from './contact-item';
import {RouterLink} from 'angular2/router';
import {ContactDetail} from './contact-details';
import {SearchBox, FilterPipe} from '../../common/common';
import {NgClass} from 'angular2/common';

@Component({ 
    selector: 'contact-list', 
    templateUrl: 'app/contacts/components/contact-list.html',
    directives: [ContactItem, ContactDetail, RouterLink, SearchBox, NgClass],
    pipes: [FilterPipe]
})
export class ContactList {
    contacts: Array<ContactModel>
    searchText:string = "";
    currentId: string;
    constructor(public contactService: ContactsService){}
    
    ngOnInit(){
        this.contacts = this.contactService.getContacts();
    }
}