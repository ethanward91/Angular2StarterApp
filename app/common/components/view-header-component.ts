import {Component, Input} from 'angular2/core';
import {UpperCasePipe} from 'angular2/common';

@Component({ 
    selector: 'view-header', 
    template: `<div class="row">
                    <div class="col-md-4 col-sm-offset-2 col-xs-12">
                        <h4>{{title | uppercase}}</h4>
                    </div>
                </div>
                <hr/>`,
    pipes: [UpperCasePipe]
})
export class ViewHeaderComponent{
    @Input()title: string;
}