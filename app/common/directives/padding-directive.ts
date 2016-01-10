import {Directive, ElementRef, Renderer, Input} from 'angular2/core';

@Directive({ 
    selector: '[padding]'
})
export class PaddingDirective{
    @Input('padding') paddingAmount:string;
    
    private _default = '5px';
    @Input() set defaultAmount(amount: string){
        this._default = (amount || this._default);    
    }
    
    constructor(private el: ElementRef, private renderer: Renderer) {
    }
    
    ngOnInit(){
         this.renderer.setElementStyle(this.el, 'padding', this.paddingAmount || this._default);
    }
}