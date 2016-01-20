import {Contact} from '../models/contact';
import {Common} from '../common/common';
import {ContactsDb} from './contactsDb';

export class ContactsContext{
    private contacts: Array<Contact>;
    private static _db = new ContactsDb();    
    constructor(){
        this.contacts = ContactsContext._db.contacts;
    }
    
    find(): Array<Contact>{
        return ContactsContext._db.contacts;
    }
    
    findById(id: string): Contact{
        var contact: Contact;
        
        ContactsContext._db.contacts.forEach(i => {
            if(i.id == id){
                contact = i;
            }
        });
        
        return contact || new Contact();
    }
    
    save(contact: Contact): Contact{
        const i = ContactsContext._db.contacts.indexOf(this.findById(contact.id));
        
        ContactsContext._db.contacts = [
            ...ContactsContext._db.contacts.slice(0, i),
            contact,
            ...ContactsContext._db.contacts.slice(i + 1)
        ];
        
        return this.findById(contact.id);
    }
    
    insert(contact: Contact): Contact{
        contact.id = Common.generateUUID();
        
        ContactsContext._db.contacts = [...ContactsContext._db.contacts, contact];
        
        return this.findById(contact.id);
    }
    
    remove(id: string){
        const i = ContactsContext._db.contacts.indexOf(this.findById(id));
        
        ContactsContext._db.contacts = [
            ...ContactsContext._db.contacts.slice(0, i),
            ...ContactsContext._db.contacts.slice(i + 1)
        ];
        
        return this.find();
    }
}