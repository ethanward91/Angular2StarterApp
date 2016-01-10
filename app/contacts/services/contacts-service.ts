import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {ContactModel} from './contact-model';

@Injectable()
export class ContactsService {
    contacts: Array<ContactModel> = [];
    
    constructor(private _router: Router){
        this.contacts.push(new ContactModel("1", "Luke Skywalker", "skywalker@theforce.net", "1597534568", "http://i.kinja-img.com/gawker-media/image/upload/w4xalikhxwwc4tcrnzor.jpg"));
        this.contacts.push(new ContactModel("2", "Princess Leia", "leia.organa@theforce.net", "1597534568", "http://images-cdn.moviepilot.com/image/upload/c_fill,h_1200,w_1600/t_mp_quality/image-star-wars-episode-vii-does-princess-leia-have-a-larger-role-than-we-think-jpeg-63031.jpg"));
        this.contacts.push(new ContactModel("3", "Han Solo", "solo@theforce.net", "1597534568", "http://s3.amazonaws.com/digitaltrends-uploads-prod/2012/11/han-solo.jpeg"));
        this.contacts.push(new ContactModel("4", "Chewy", "chewy123@wookie.com", "1597534568", "http://chewyandthegang.com/sitebuilder/images/CHEWY_CHEWBACCA-221x235.jpg"));
        this.contacts.push(new ContactModel("5", "R2-D2", "", "1597534568", "http://www.galacticbinder.com/images/articles/R2-D2.jpg"));
        this.contacts.push(new ContactModel("6", "C-3PO", "", "1597534568", "https://pbs.twimg.com/profile_images/22039052/03.01.c3po.jpg"));
    }
    
    getContacts():Array<ContactModel>{
        return this.contacts;
    }
    
    getContact(id:string):ContactModel{
        return this.contacts[(parseInt(id) - 1)];
    }
    
    addContact(contact: ContactModel){
        
        contact.id = (this.contacts.length + 1).toString();
        this.contacts = [...this.contacts, contact];
        
        this._router.navigate(["Contacts"]);
    }
    
    updateContact(contact: ContactModel){
        
        const i = this.contacts.indexOf(contact);
        
        this.contacts = [
            ...this.contacts.slice(0, i),
            contact,
            ...this.contacts.slice(i + 1)
        ];
        
        this._router.navigate(["Contacts"]);
    }
    
}