import {Component, Input} from 'angular2/core';
import {ContactModel} from '../services/contact-model';
import {RouterLink} from 'angular2/router';

@Component({ 
    selector: 'contact-item', 
    template: `       <div class="contact-container">
                            <div class="row contact-panel" [routerLink]="['EditContact', {id:contact.id}]">
                                <div class="col-sm-3">  
                                    <img [src]="contact.img" alt="" class="img-circle img-fluid">
                                </div>
                                <div class="col-sm-6">
                                    <h4>{{contact.name}}</h4>
                                    <small>
                                        <div>{{contact.email}}</div>
                                        <div>{{contact.phone}}</div>
                                    </small>
                                </div>
                            </div>
                        </div>`,
    directives: [RouterLink]
})
export class ContactItem{
    @Input()contact: ContactModel
}