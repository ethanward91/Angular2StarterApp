import {Component, Input} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {ContactModel} from '../services/contact-model';
import {RouterLink} from 'angular2/router';
import {Padding, ImagePipe} from '../../common/common';

@Component({ 
    selector: 'contact-detail', 
    templateUrl: 'app/contacts/components/contact-detail.html',
    directives: [COMMON_DIRECTIVES, RouterLink, Padding],
    pipes: [ImagePipe]
})
export class ContactDetail{
    @Input()contact:ContactModel;
    constructor(){ }
}