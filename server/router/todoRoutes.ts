import {Router} from 'express';
import {TodosContext} from '../db/todosContext';

export class TodoRoutes{
    public routes: Router;
    constructor(private router: Router){
        this.routes = this.setRoutes();
    }
    
    private setRoutes(): Router{
         this.router.route('/Todos')
            .get((req, res) => {
                let _context = new TodosContext();
                res.json(_context.find());
            })
            .post((req, res) => {
                let _context = new TodosContext();
                
                res.json(_context.insert(req.body));
            })
            .put((req, res) => {
                let _context = new TodosContext();
                
                res.json(_context.save(req.body));
            });
            
        this.router.route('/Todos/:id')
            .get((req, res) => {
                let _context = new TodosContext();
                
                res.json(_context.findById(req.params.id));
            });
        return this.router;
    }
}