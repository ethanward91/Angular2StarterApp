import express = require('express');
import bodyParser = require('body-parser');
import {Express, Router} from 'express';
import {ContactRoutes} from './router/contactRoutes';
import {TodoRoutes} from './router/todoRoutes';

class Server{
    private app: Express;
    private bodyParser: any;
    private port = process.env.PORT || 8080;
    
    constructor(){
        this.app = express();
        
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
        this.app.use('/api', this.configureRoutes());
        
        console.log('Starting server on port ' + this.port);
        this.app.listen(this.port);
    }
    
    
    configureRoutes(): Router{
        let router = express.Router();
        
        router.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
            
            next();
        });
        
        router = new ContactRoutes(router).routes;
        router = new TodoRoutes(router).routes;  
        
        return router;
    }
}

new Server();