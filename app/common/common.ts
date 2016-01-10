/**
 * @module
 * @description
 * Application library for common components.
 */
import {ViewHeaderComponent} from './components/view-header-component';
import {HoverBlurrDirective} from './directives/on-hover-directive';
import {PaddingDirective} from './directives/padding-directive';

export var ViewHeader = ViewHeaderComponent;
export var HoverBlurr = HoverBlurrDirective;
export var Padding = PaddingDirective;
export var COMMON_APP_DIRECTIVES = [ViewHeaderComponent, HoverBlurrDirective, PaddingDirective];