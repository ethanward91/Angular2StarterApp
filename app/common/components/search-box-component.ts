import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({ 
    selector: 'search-box', 
    template: `<div class="input-group">
                    <input type="text" class="form-control" placeholder="{{placeHolder}}" aria-describedby="search-addon" #search (keyup)="value.emit(search.value)">
                    <span class="input-group-addon" id="search-addon"><i class="fa fa-search"></i></span>   
                </div>`
})
export class SearchBoxComponent{
    @Input() placeHolder: string;
    @Output() value = new EventEmitter<string>();
}