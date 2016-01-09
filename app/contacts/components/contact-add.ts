import {Component, OnInit} from 'angular2/core';
import {ContactModel} from '../services/contact-model';
import {ContactsService} from '../services/contacts-service';
import {ContactForm} from './contact-form';

@Component({ 
    selector: 'contact-add', 
    template: `<div class="row">
                    <div class="col-md-4 col-sm-offset-2 col-xs-12">
                        <h1>Add Contact</h1>
                    </div>
                </div>
                <contact-form [contact]="contact" (save)="contactService.addContact($event)"></contact-form>`,
    directives: [ContactForm]
})
export class ContactAdd implements OnInit {
    contact: ContactModel;
    constructor(public contactService: ContactsService){
        
    }
    
    ngOnInit(){
        this.contact = new ContactModel();
    }
}