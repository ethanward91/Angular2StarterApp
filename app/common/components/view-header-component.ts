import {Component, Input} from 'angular2/core';

@Component({ 
    selector: 'view-header', 
    template: `<div class="row">
                    <div class="col-md-4 col-sm-offset-2 col-xs-12">
                        <h1>{{title}}</h1>
                    </div>
                </div>`
})
export class ViewHeaderComponent{
    @Input()title: string;
}