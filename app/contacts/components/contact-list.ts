import {Component} from 'angular2/core'
import {ContactsService} from '../services/contacts-service';
import {ContactModel} from '../services/contact-model';
import {ContactItem} from './contact-item';
import {RouterLink} from 'angular2/router';
import {ContactDetail} from './contact-details';
import {FilterPipe} from '../pipes/filter-pipe';

@Component({ 
    selector: 'contact-list', 
    templateUrl: 'app/contacts/components/contact-list.html',
    directives: [ContactItem, ContactDetail, RouterLink],
    pipes: [FilterPipe]
})
export class ContactList {
    contacts: Array<ContactModel>
    search:string = "";
    currentId: string;
    constructor(public contactService: ContactsService){}
    
    ngOnInit(){
        this.contacts = this.contactService.getContacts();
    }
}