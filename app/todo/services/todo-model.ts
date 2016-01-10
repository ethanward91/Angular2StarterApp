export class TodoModel {
    
    status:string;
    
    constructor(
        public id:string ="",
        public name:string = "", 
        public notes:string = ""){
            this.status = 'uncompleted';
            
        }
}