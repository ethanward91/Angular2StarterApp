import {Component, Input} from 'angular2/core';
import {COMMON_DIRECTIVES, UpperCasePipe} from 'angular2/common';
import {ContactModel} from '../services/contact-model';
import {RouterLink} from 'angular2/router';
import {Padding, ImagePipe, PhoneNumberPipe} from '../../common/common';

@Component({ 
    selector: 'contact-detail', 
    templateUrl: 'app/contacts/components/contact-detail.html',
    directives: [COMMON_DIRECTIVES, RouterLink, Padding],
    pipes: [ImagePipe, PhoneNumberPipe, UpperCasePipe]
})
export class ContactDetail{
    @Input()contact:ContactModel;
    constructor(){ }
}