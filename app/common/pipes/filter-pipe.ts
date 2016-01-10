import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    list: Array<any>;
    transform(value: Array<any>, args:string[]){
        this.list = new Array<any>();
        
        value.forEach((item) => {
            if(!args[1]){
                 Object.getOwnPropertyNames(item).forEach((prop) => {
                   this.searchForItem(item, prop, args[0]);
                });
            }
            else{
                this.searchForItem(item, args[1], args[0]);
            }
        });
        
        return this.list;
    }
    
    
    private searchForItem(item:Object, property, search):void {
        if(item[property].toLowerCase().indexOf(search.toLowerCase()) != -1){
            if(this.list.indexOf(item) == -1){
                this.list.push(item);
            }
        }
    }
}