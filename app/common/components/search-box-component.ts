import {Component, Output, EventEmitter} from 'angular2/core';

@Component({ 
    selector: 'search-box', 
    template: `<div class="input-group">
                    <input type="text" class="form-control" placeholder="Search Contacts..." aria-describedby="search-addon" #search (keyup)="value.emit(search.value)">
                    <span class="input-group-addon" id="search-addon"><i class="fa fa-search"></i></span>   
                </div>`
})
export class SearchBoxComponent{
    @Output() value = new EventEmitter<string>();
}