import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {ContactModel} from '../services/contact-model';

@Component({ 
    selector: 'contact-form', 
    templateUrl: 'app/contacts/components/contact-form.html',
    directives: [NgForm]
})
export class ContactForm{
    @Input() contact: ContactModel = new ContactModel();
    @Output() save = new EventEmitter();
    constructor(){
       
    }
}