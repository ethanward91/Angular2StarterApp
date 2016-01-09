import {Component, OnInit} from 'angular2/core';
import {ContactModel} from '../services/contact-model';
import {ContactsService} from '../services/contacts-service';
import {RouteParams} from 'angular2/router';
import {ContactForm} from './contact-form';

@Component({ 
    selector: 'contact-edit', 
    template: `<div class="row">
                    <div class="col-md-4 col-sm-offset-2 col-xs-12">
                        <h1>Edit Contact</h1>
                    </div>
                </div>
                <contact-form [contact]="contact" (save)="contactService.updateContact($event)"></contact-form>`,
    directives: [ContactForm]
})
export class ContactEdit implements OnInit {
    contact: ContactModel;
    constructor(public contactService: ContactsService, private _routerParams:RouteParams){
        
    }
    
    ngOnInit(){
        const id = this._routerParams.get("id");
        this.contact = this.contactService.getContact(id);
    }
}