import {Component, OnInit} from 'angular2/core';
import {ContactModel} from '../services/contact-model';
import {ContactsService} from '../services/contacts-service';
import {ContactForm} from './contact-form';
import {ViewHeader} from '../../common/common';

@Component({ 
    selector: 'contact-add', 
    template: `<view-header [title]="'Add Contact'"></view-header>
                <contact-form [contact]="contact" (save)="contactService.addContact($event)"></contact-form>`,
    directives: [ContactForm, ViewHeader]
})
export class ContactAdd implements OnInit {
    contact: ContactModel;
    constructor(public contactService: ContactsService){
        
    }
    
    ngOnInit(){
        this.contact = new ContactModel();
    }
}