
import {Contact} from '../models/contact';
import {Common} from '../common/common';

export class ContactsDb{
    public contacts: Array<Contact> = new Array<Contact>();
    constructor(){
        this.contacts.push(new Contact(Common.generateUUID(), "Luke Skywalker", "1597534568", "skywalker@theforce.net", "http://i.kinja-img.com/gawker-media/image/upload/w4xalikhxwwc4tcrnzor.jpg"));
        this.contacts.push(new Contact(Common.generateUUID(), "Princess Leia", "1597534568", "leia.organa@theforce.net",  "http://images-cdn.moviepilot.com/image/upload/c_fill,h_1200,w_1600/t_mp_quality/image-star-wars-episode-vii-does-princess-leia-have-a-larger-role-than-we-think-jpeg-63031.jpg"));
        this.contacts.push(new Contact(Common.generateUUID(), "Han Solo","1597534568", "solo@theforce.net",  "http://s3.amazonaws.com/digitaltrends-uploads-prod/2012/11/han-solo.jpeg"));
        this.contacts.push(new Contact(Common.generateUUID(), "Chewy","1597534568", "chewy123@wookie.com",  "http://chewyandthegang.com/sitebuilder/images/CHEWY_CHEWBACCA-221x235.jpg"));
        this.contacts.push(new Contact(Common.generateUUID(), "R2-D2", "1597534568", "",  "http://www.galacticbinder.com/images/articles/R2-D2.jpg"));
        this.contacts.push(new Contact(Common.generateUUID(), "C-3PO", "1597534568", "", "https://pbs.twimg.com/profile_images/22039052/03.01.c3po.jpg"));
    }
}