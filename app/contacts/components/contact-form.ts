import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {ContactModel} from '../services/contact-model';
import {PhoneNumberPipe} from '../../common/common';

@Component({ 
    selector: 'contact-form', 
    templateUrl: 'app/contacts/components/contact-form.html',
    pipes: [PhoneNumberPipe]
})
export class ContactForm{
    @Input() contact: ContactModel = new ContactModel();
    @Output() save = new EventEmitter<ContactModel>();
    constructor(){
       
    }
}