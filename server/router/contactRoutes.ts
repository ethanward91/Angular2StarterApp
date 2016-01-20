import {Router} from 'express';
import {ContactsContext} from '../db/contactsContext';

export class ContactRoutes{
    public routes: Router;
    constructor(private router: Router){
        this.routes = this.setRoutes();
    }
    
    private setRoutes(): Router{
         this.router.route('/Contacts')
            .get((req, res) => {
                let _context = new ContactsContext();
                res.json(_context.find());
            })
            .post((req, res) => {
                let _context = new ContactsContext();
                
                res.json(_context.insert(req.body));
            })
            .put((req, res) => {
                let _context = new ContactsContext();
                
                res.json(_context.save(req.body));
            });
            
        this.router.route('/Contacts/:id')
            .get((req, res) => {
                let _context = new ContactsContext();
                
                res.json(_context.findById(req.params.id));
            })
            .delete((req, res) => {
                let _context = new ContactsContext();
                res.json(_context.remove(req.params.id));
            });
        return this.router;
    }
}