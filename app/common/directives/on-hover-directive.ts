import {Directive, ElementRef, Renderer, Input} from 'angular2/core';

@Directive({ 
    selector: '[hoverBlurr]', 
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HoverBlurrDirective{
    @Input('hoverBlurr') blurrPercent:string;
    
    private _defaultBlurr = '0.7';
    
    constructor(private el: ElementRef, private renderer: Renderer){
           this.renderer.setElementStyle(this.el, 'cursor', 'pointer');
    }
    
    onMouseEnter() { this._blurr(this.blurrPercent || this._defaultBlurr); }
    onMouseLeave() { this._blurr(null); }
    
    private _blurr(percent: string){
        this.renderer.setElementStyle(this.el, 'opacity', percent);
    }
}