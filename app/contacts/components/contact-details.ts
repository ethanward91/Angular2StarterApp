import {Component, OnInit, Input} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {ContactModel} from '../services/contact-model';
import {RouterLink} from 'angular2/router';

@Component({ 
    selector: 'contact-detail', 
    templateUrl: 'app/contacts/components/contact-detail.html',
    directives: [COMMON_DIRECTIVES, RouterLink]
})
export class ContactDetail implements OnInit{
    @Input()contact:ContactModel;
    constructor(){ }
    
    ngOnInit(){
        console.log(this.contact)
    }
}