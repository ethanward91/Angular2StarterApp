import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {ContactModel} from '../services/contact-model';
import {ContactsService} from '../services/contacts-service';
import {ContactForm} from './contact-form';
import {ViewHeader} from '../../common/common';

@Component({ 
    selector: 'contact-edit', 
    template: `<view-header [title]="'Edit Contact'"></view-header>
                <contact-form [contact]="contact" (save)="contactService.updateContact($event)"></contact-form>`,
    directives: [ContactForm, ViewHeader]
})
export class ContactEdit implements OnInit {
    contact: ContactModel;
    constructor(public contactService: ContactsService, private _routerParams:RouteParams){
        
    }
    
    ngOnInit()
    {
        this.contact = new ContactModel();
        const id = this._routerParams.get("id");
        this.contactService.getContact(id)
            .subscribe(contact => this.contact = contact);
    }
}