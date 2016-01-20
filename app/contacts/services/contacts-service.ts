import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Router} from 'angular2/router';
import {ContactModel} from './contact-model';

@Injectable()
export class ContactsService {
    contacts: Array<ContactModel> = [];
    private _baseUrl: string = "http://localhost:8080";
    
    constructor(private _router: Router, private _http: Http){
    }
    
    getContacts() {
        return this._http.get(this._baseUrl + "/api/Contacts", {})
            .map(res =>
            {
                return res.json();
            });
    }
    
    getContact(id:string){
        return this._http.get(this._baseUrl + "/api/Contacts/" + id)
            .map(res =>
            {
                return res.json();
            });
    }
    
    addContact(contact: ContactModel)
    {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(this._baseUrl + "/api/Contacts", JSON.stringify(contact), { headers: headers })
            .subscribe(() =>
            {
                this._router.navigate(["Contacts"]);
            });
    }
    
    updateContact(contact: ContactModel){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.put(this._baseUrl + "/api/Contacts", JSON.stringify(contact), {headers: headers})
            .subscribe(() =>
            {
                this._router.navigate(["Contacts"]);
            });
    }
    
}